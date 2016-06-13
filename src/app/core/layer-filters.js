import map from 'lodash/map';
import LayerFiltersSet from './layer-filters-set';

export default class LayerFilters {
  constructor(_jsonArr) {
    this.opt = map(_jsonArr, a => {
      return new LayerFiltersSet(a);
    });
  }
  toJSON() {
    return map(this.opt, o => {
      return o.toJSON();
    });
  }
}
