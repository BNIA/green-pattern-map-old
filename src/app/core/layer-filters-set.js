import map from 'lodash/map';
import LayerFilter from './layer-filter';

export default class LayerFiltersSet {
  constructor(_jsonObj) {
    var self = this;
    this.type = 'layer-filters-set';
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.allOn = -1;
    this.opt = map(_jsonObj.opt, o => {
      return new LayerFilter(o, self);
    });
  }
  onChildChange() {
    
  }
  toggleAll(onOff = true) {
    this.opt = map(this.opt, o => {
      o.toggleAll(onOff);
      return o;
    });
    this.changeAllOn(onOff);
  }
  changeAllOn(onOff = true) {
    if (onOff === true) {
      this.allOn = 1;
    } else if (onOff === false) {
      this.allOn = -1;
    } else if (onOff === null) {
      this.allOn = 0;
    }
  }
  toJSON() {
    return {
      key: this.key,
      opt: map(this.opt, o => {
        return o.toJSON();
      })
    };
  }
}
