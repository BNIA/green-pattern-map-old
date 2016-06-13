import map from 'lodash/map';
import LayerFilter from './layer-filter';

export default class LayerFiltersSet {
  constructor(_jsonObj) {
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.opt = map(_jsonObj.opt, o => {
      return new LayerFilter(o);
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
