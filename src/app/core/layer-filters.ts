import {LayerFilter} from './layer-filter';

export class LayerFilters{
    cg:LayerFilter[]
    sw:LayerFilter[]
    global:LayerFilter[]
    allCG:boolean
    allSW:boolean
    constructor(private _jsonObj?:any){
        var self = this
        this.cg = _.map(_jsonObj.cg,(j) => {
            let f = new LayerFilter(j)
            return f
        })
        this.sw = _.map(_jsonObj.sw,(j) => {
            let f = new LayerFilter(j)
            return f
        })
        this.global = _.map(_jsonObj.global,(j) => {
            let f = new LayerFilter(j)
            return f
        })
        this.allCG = _jsonObj.allCG
        this.allSW = _jsonObj.allCG
    }
    toJSON(){
        return {
            cg: _.map(this.cg,f => f.toJSON()),
            sw: _.map(this.sw,f => f.toJSON()),
            global: _.map(this.global,f => f.toJSON()),
            allSW: this.allSW,
            allCG: this.allCG
        }
    }
}
