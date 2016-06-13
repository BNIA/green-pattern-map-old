import map from 'lodash';
import BoundaryChoiceConfigOption from './boundary-choice-config-option';

export default class BoundaryChoiceConfig {
  constructor(_jsonObj) {
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.active = _jsonObj.active || false;
    this.opt = map(_jsonObj.opt, o => {
      return new BoundaryChoiceConfigOption(o);
    });
  }
  toJSON() {
    return {
      key: this.key,
      active: this.active,
      opt: map(this.opt, o => {
        return o.toJSON();
      })
    };
  }
}
