import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {LayerFilters} from '../core/layer-filters';
import {GeoJSON,geoJson,circleMarker,FeatureGroup,featureGroup} from 'leaflet'
import {map, chunk} from 'lodash'

@Injectable()
export class LayersService{
    private _layersUrl:string = '/map/layers'
    private _circleMarkerOptions:any = {
        radius: 20,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.2,
    }
    constructor(private http: Http) {}
    getLayers(layerFilters:LayerFilters): Observable<FeatureGroup<any>[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body:string = JSON.stringify(layerFilters.toJSON())
        return this.http.post(this._layersUrl,body,options)
            .map(this.extractLayersData)
            .catch(this.handleError)
    }
    private extractLayersData(res: Response):FeatureGroup<any>[] {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json()
        let geojson:GeoJSON[] = _.map(body,(o) => {
            return geoJson(body,{pointToLayer:(feature,latlng) => {
                return circleMarker(latlng,{
                    radius:4,opacity:1,fillOpacity:1
                })
            }})
        })
        let chunks:GeoJSON[][] = _.chunk(geojson,25)
        let layers:FeatureGroup<any>[] = _.map(chunks,(c) => {
            return featureGroup(c)
        })
        //layers.setStyle(this._circleMarkerOptions)
        return layers || null;
    }
    private handleError(error: any){
        let errMsg = error.message || 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
