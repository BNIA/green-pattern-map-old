import {BoundariesOption} from './boundaries-option';

export class Boundaries{
    opt:BoundariesOption[]
    constructor(_jsonObjs:any[]){
        this.opt = _.map(_jsonObjs,(j)=>{
            let b = new BoundariesOption(j);
            return b;
        })
    }
}
