import {BoundaryChoice} from './boundary-choice';
import {map} from 'lodash'
export class BoundaryChoices{
    opt:BoundaryChoice[] = []
    constructor(_jsonObjs?:any[]){
        if(typeof _jsonObjs === "undefined") {return}
        this.opt = _.map(_jsonObjs,(j)=>{
            let b = new BoundaryChoice(j);
            return b;
        })
    }
    selectBoundary(key:string){
        
    }
    toJSON():any{
        return map(this.opt,(o) => {return o.toJSON()})
    }
}
