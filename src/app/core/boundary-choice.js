import map from 'lodash/map';
import filter from 'lodash/filter';
import BoundaryChoiceConfig from './boundary-choice-config';

export default class BoundaryChoice {
  constructor(_jsonObj, parent) {
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.active = _jsonObj.active;
    this.configs = map(_jsonObj.configs, o => {
      return new BoundaryChoiceConfig(o);
    });
    this.parent = parent;
  }
  filterConfig(key) {
    return filter(this.configs, c => {
      return c.grp === key;
    });
  }
  toJSON() {
    return {
      key: this.key,
      active: this.active,
      configs: map(this.configs, o => {
        return o.toJSON();
      })
    };
  }
}
