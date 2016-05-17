import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {BoundaryChoices} from '../core/boundary-choices';
import {GeoJSON,geoJson} from 'leaflet'
import {map} from 'lodash'

@Injectable()
export class BoundariesService{
    private _boundariesUrl:string = '/map/boundaries'
    constructor(private http: Http) {}
    getBoundaries(boundaryChoices:BoundaryChoices): Observable<GeoJSON[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body:string = JSON.stringify(boundaryChoices.toJSON())
        return this.http.post(this._boundariesUrl,body,options)
            .map(this.extractBoundariesData)
            .catch(this.handleError)
    }
    private extractBoundariesData(res: Response):GeoJSON[] {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json()
        if (body.length === 0){return null}
        let boundaries:GeoJSON[] = map(body,(o) => {
            let myStyle = {
                weight:2,
                opacity:0.8
            }
            myStyle['color'] = o['properties'].color || "rgb(250,167,50)"
            let geo = geoJson(o,myStyle)
            var popup = "<span>Name: " + o['properties'].name + "</span>"
            if(o['properties'].val){
                popup += "<span>Value: " + o['properties'].val + "</span>"
            }
            geo.bindPopup(popup)
            return geo
        })
        console.log(boundaries[0])
        //boundaries.setStyle(this._circleMarkerOptions)
        return boundaries || null;
    }
    private handleError(error: any){
        let errMsg = error.message || 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
