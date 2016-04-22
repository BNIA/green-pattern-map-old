import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Options} from '../core/options';

@Injectable()
export class OptionsService{
    constructor(private http: Http) {}
    getOptions(): Promise<any>{
        return this.http.get('/map/options')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        let options = new Options(body)
        return options || { };
    }
    private handleError(error: any){
        let errMsg = error.message || 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
