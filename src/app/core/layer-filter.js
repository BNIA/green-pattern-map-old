import map from 'lodash/map';
import LayerFilterOption from './layer-filter-option';

export default class LayerFilter {
  constructor(_jsonObj, parent) {
    var self = this;
    this.type = 'layer-filter';
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.opt = map(_jsonObj.opt, o => {
      return new LayerFilterOption(o, self);
    });
    this.allOn = -1;
    this.parent = parent;
  }
  alertChange() {

  }
  onChildChange() {
    this.parent.onChildChange();
  }
  toggleAll(onOff = true) {
    this.opt = map(this.opt, o => {
      o.isOn = onOff;
      return o;
    });
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
