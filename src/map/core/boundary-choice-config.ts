import {BoundaryChoiceConfigOption} from './boundary-choice-config-option';
import {map,partition,forEach} from 'lodash'

export class BoundaryChoiceConfig{
    key:string
    val:string
    active:boolean
    opt:BoundaryChoiceConfigOption[]
    constructor(private _jsonObj){
        this.key = _jsonObj.key
        this.val = _jsonObj.val
        this.active = _jsonObj.active
        this.opt = map(_jsonObj.opt,o => {
            return new BoundaryChoiceConfigOption(o)
        })
    }
    selectOpt(key:string){
        var optPart = partition(this.opt,{key:key})
        var selected = optPart[0][0]
        var notSelected = optPart[1]
        selected.isOn = true
        forEach(notSelected,(n) => {
            n.isOn = false
        })
    }
    toJSON(){
        return {
            key:this.key,
            active:this.active,
            opt:map(this.opt,o => o.toJSON())
        }
    }
}
