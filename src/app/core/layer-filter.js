import map from 'lodash/map';
import LayerFilterOption from './layer-filter-option';

export default class LayerFilter {
  constructor(_jsonObj) {
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.opt = map(_jsonObj.opt, o => {
      return new LayerFilterOption(o);
    });
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
