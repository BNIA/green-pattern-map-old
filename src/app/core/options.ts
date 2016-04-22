import {Filters} from './filters';
import {Boundaries} from './boundaries';

export class Options{
    filters:Filters
    boundaries:Boundaries
    constructor(private _jsonObj){
        this.filters = new Filters(_jsonObj.filters)
        this.boundaries = new Boundaries(_jsonObj.boundaries)
    }
}
