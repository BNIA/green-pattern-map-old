import {LayerFilterOption} from './layer-filter-option';
import {map,forIn} from 'lodash'

export class LayerFilter {
  key: string
  val: string
  allToggled: boolean
  active: boolean
  opt: LayerFilterOption[] = [];
  constructor(private _jsonObj: any) {
      let self = this;
      this.key = _jsonObj.key;
      this.val = _jsonObj.val;
      this.active = _jsonObj.active;
      this.opt = map(_jsonObj.opt, function(o:any){
          let lfo:LayerFilterOption =  new LayerFilterOption(o);
          return lfo;
      });
  }
  toggleActive(){
      this.active = !this.active
      forIn(this.opt,(o) => {
          o.active = this.active
      })

  }
  toJSON(){
      return {
          key:this.key,
          allToggled:this.allToggled,
          active:this.active,
          opt:map(this.opt,o => o.toJSON())
      }
  }
}
