import map from 'lodash/map';
import BoundaryChoiceConfigOption from './boundary-choice-config-option';

export default class BoundaryChoiceConfig {
  constructor(_jsonObj) {
    var self = this;
    this.type = 'boundary-choice-config';
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.grp = _jsonObj.grp;
    this.active = _jsonObj.active || false;
    this.opt = map(_jsonObj.opt, o => {
      return new BoundaryChoiceConfigOption(o, self);
    });
  }
  toggleOtherOptsOff(key) {
    this.opt = map(this.opt, o => {
      if (o.key !== key) {
        o.isOn = false;
      }
      return o;
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
