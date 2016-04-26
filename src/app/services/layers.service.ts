import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {LayerFilters} from '../core/layer-filters';

@Injectable()
export class LayersService{
    private _layersUrl:string = '/map/layers'
    constructor(private http: Http) {}
    getLayers(layerFilters:LayerFilters): Observable<L.GeoJSON[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body:string = JSON.stringify(layerFilters.toJSON())
        return this.http.post(this._layersUrl,body,options)
            .map(this.extractLayersData)
            .catch(this.handleError)
    }
    private extractLayersData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json()
        let layers = _.map(body,(o) => {
            return L.geoJson(o,{
                pointToLayer:this.pointToLayer
            })
        })
        console.log(layers)
        return layers || { };
    }
    private pointToLayer(feature:any,latlng:any){
        return new L.Marker(latlng)
    }
    private handleError(error: any){
        let errMsg = error.message || 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
