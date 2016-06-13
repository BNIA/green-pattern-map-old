import {current, future} from '../../../shared/core/phases';

export default class PhasesCardController {
  constructor() {
    this.current = current;
    this.future = future;
  }
}
