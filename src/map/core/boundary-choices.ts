import {BoundaryChoice} from './boundary-choice';

export class BoundaryChoices{
    opt:BoundaryChoice[] = []
    constructor(_jsonObjs?:any[]){
        if(typeof _jsonObjs === "undefined") {return}
        this.opt = _.map(_jsonObjs,(j)=>{
            let b = new BoundaryChoice(j);
            return b;
        })
    }
}
