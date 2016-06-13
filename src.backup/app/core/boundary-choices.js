import map from 'lodash/map';
import BoundaryChoice from './boundary-choice.js';

export default class BoundaryChoices {
  constructor(_jsonObj) {
    this.opt = map(_jsonObj.opt, o => {
      return new BoundaryChoice(o);
    });
  }
  toJSON() {
    return {
      opt: map(this.opt, o => {
        return o.toJSON();
      })
    };
  }
}
