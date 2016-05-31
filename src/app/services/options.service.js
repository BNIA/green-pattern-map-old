import {options} from '../../core/options.js';

export default class OptionsService {
  constructor() {
    this.options = options;
  }
  getBoundaryChoices() {
    return this.$http.get(this._boundaryChoicesUrl)
      .then(this._extractBoundaryChoicesData)
      .catch(this._handleError);
  }
  getLayerFilters() {
    return this.$http.get(this._layerFiltersUrl)
      .then(this._extractLayerFiltersData)
      .catch(this._handleError);
  }
  _extractLayerFiltersData(data) {
    console.log(data);
  }
  _extractBoundaryChoicesData(data) {
    console.log(data);
  }
  _handleError(error) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg);
  }
}
