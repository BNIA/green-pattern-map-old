import {BoundaryChoice} from './boundary-choice';
import {map,partition,forEach,find} from 'lodash'
export class BoundaryChoices{
    opt:BoundaryChoice[] = []
    constructor(_jsonObjs?:any[]){
        if(typeof _jsonObjs === "undefined") {return}
        this.opt = map(_jsonObjs,(j)=>{
            let b = new BoundaryChoice(j);
            return b;
        })
    }
    selectBoundary(key:string){
        var boundaryChoicesPart = partition(this.opt,{key:key})
        var selected = boundaryChoicesPart[0][0]
        var notSelected = boundaryChoicesPart[1]
        selected.isOn = true
        forEach(notSelected,(n) => {
            n.isOn = false
        })
    }
    selectBoundaryConfigsOpt(bcKey:string,configsKey:string,optKey:string){
        var bc = _.find(this.opt,{key:bcKey})
        bc.selectConfigsOpt(configsKey,optKey)
    }
    toJSON():any{
        return map(this.opt,(o) => {return o.toJSON()})
    }
}
