import {FilterOption} from './filter-option';

export class Filter {
  key: string;
  val: string;
  allOn: boolean;
  active: boolean;
  opt: FilterOption[];
  constructor(private _jsonObj: any) {
      let self = this;
      this.key = _jsonObj.key;
      this.val = _jsonObj.val;
      this.allOn = _jsonObj.allOn;
      this.active = _jsonObj.active;
      this.opt = _.map(_jsonObj.opt, function(o:any){
          let fo =  new FilterOption(o);
          return fo;
      });
  }
  toJSON(){
      return {
          key:this.key,
          allOn:this.allOn,
          active:this.active,
          opt:_.map(this.opt,o => o.toJSON())
      }
  }
}
