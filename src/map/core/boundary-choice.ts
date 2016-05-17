import {BoundaryChoiceConfig} from './boundary-choice-config';
import {map,find} from 'lodash'

export class BoundaryChoice{
    key:string;
    val:string;
    isOn:boolean;
    active:boolean;
    configs:BoundaryChoiceConfig[]
    constructor(private _jsonObj:any){
        this.key = _jsonObj.key
        this.val = _jsonObj.val
        this.isOn = _jsonObj.isOn
        this.active = _jsonObj.active
        this.configs = map(_jsonObj.configs, c => {return new BoundaryChoiceConfig(c)})
    }
    selectConfigsOpt(configsKey:string,optKey:string){
        var co = find(this.configs,{key:configsKey})
        co.selectOpt(optKey)
    }
    toJSON():any{
        return {
            key:this.key,
            isOn:this.isOn,
            active:this.active,
            configs:map(this.configs,c => c.toJSON())
        }
    }
}
