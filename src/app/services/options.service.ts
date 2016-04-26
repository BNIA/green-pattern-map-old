import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {LayerFilters} from '../core/layer-filters';
import {BoundaryChoices} from '../core/boundary-choices';

@Injectable()
export class OptionsService{
    private _layerFiltersUrl:string = '/map/options/layer_filters'
    private _boundaryChoicesUrl:string = '/map/options/boundary_choices'
    constructor(private http: Http) {}
    getLayerFilters(): Observable<LayerFilters>{
        return this.http.get(this._layerFiltersUrl)
            .map(this.extractLayerFiltersData)
            .catch(this.handleError)
    }
    getBoundaryChoices(): Observable<BoundaryChoices>{
        return this.http.get(this._boundaryChoicesUrl)
            .map(this.extractBoundaryChoicesData)
            .catch(this.handleError)
    }
    private extractLayerFiltersData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        let options = new LayerFilters(body)
        return options || { };
    }
    private extractBoundaryChoicesData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        console.log(body)
        let options = new BoundaryChoices(body)
        console.log(options);
        return options || { };
    }
    private handleError(error: any){
        let errMsg = error.message || 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
