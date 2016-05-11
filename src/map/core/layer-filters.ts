import {LayerFilter} from './layer-filter';
import {map} from 'lodash'

export class LayerFilters{
    cg:LayerFilter[]
    sw:LayerFilter[]
    global:LayerFilter[]
    allCG:boolean
    allSW:boolean
    constructor(private _jsonObj?:any){
        var self = this
        this.cg = map(_jsonObj.cg,(j) => {
            let f = new LayerFilter(j)
            return f
        })
        this.sw = map(_jsonObj.sw,(j) => {
            let f = new LayerFilter(j)
            return f
        })
        this.global = map(_jsonObj.global,(j) => {
            let f = new LayerFilter(j)
            return f
        })
        this.allCG = _jsonObj.allCG
        this.allSW = _jsonObj.allCG
    }
    toJSON(){
        return {
            cg: map(this.cg,f => f.toJSON()),
            sw: map(this.sw,f => f.toJSON()),
            global: map(this.global,f => f.toJSON()),
            allSW: this.allSW,
            allCG: this.allCG
        }
    }
}
