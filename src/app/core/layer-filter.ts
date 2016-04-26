import {LayerFilterOption} from './layer-filter-option';

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
      this.opt = _.map(_jsonObj.opt, function(o:any){
          let lfo:LayerFilterOption =  new LayerFilterOption(o);
          return lfo;
      });
  }
  toggleOptsIsOn(onOff:boolean){
      _.forIn(this.opt,(o) => {
          o.isOn = onOff
      })
  }
  toggleActive(){
      this.active = !this.active
      console.log(this.active)
      _.forIn(this.opt,(o) => {
          o.active = this.active
          console.log(o.active)
      })
  }
  toJSON(){
      return {
          key:this.key,
          allToggled:this.allToggled,
          active:this.active,
          opt:_.map(this.opt,o => o.toJSON())
      }
  }
}
