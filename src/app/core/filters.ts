import {Filter} from './filter';

export class Filters{
    cg:Filter[];
    sw:Filter[];
    global:Filter[];
    all_cg:boolean;
    all_sw:boolean;
    constructor(private _jsonObj:any){
        var self = this
        this.cg = _.map(_jsonObj.cg,(j) => {
            let f = new Filter(j)
            return f
        })
        this.sw = _.map(_jsonObj.sw,(j) => {
            let f = new Filter(j)
            return f
        })
        this.global = _.map(_jsonObj.global,(j) => {
            let f = new Filter(j)
            return f
        })
        this.all_cg = _jsonObj.all_cg
        this.all_sw = _jsonObj.all_sw
    }
    toJSON(){
        return {
            cg: _.map(this.cg,f => f.toJSON()),
            sw: _.map(this.sw,f => f.toJSON()),
            global: _.map(this.global,f => f.toJSON()),
            all_sw: this.all_sw,
            all_cg: this.all_cg
        }
    }
}
