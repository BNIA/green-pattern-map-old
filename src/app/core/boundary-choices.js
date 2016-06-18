import find from 'lodash/find';
import map from 'lodash/map';
import BoundaryChoice from './boundary-choice.js';

export default class BoundaryChoices {
  constructor(_jsonArr) {
    var self = this;
    this.opt = map(_jsonArr, o => {
      return new BoundaryChoice(o, self);
    });
  }
  findBoundaryChoice(key) {
    return find(this.opt, o => {
      return o.key === key;
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