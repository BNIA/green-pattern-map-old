import BoundaryChoices from '../core/boundary-choices.js';
import LayerFilters from '../core/layer-filters.js';

export default class OptionsService {
  constructor($http) {
    this.$http = $http;
    this._layerFiltersUrl = '/options/layer_filters';
    this._boundaryChoicesUrl = '/options/boundary_choices';
  }
  getBoundaryChoices() {
    return this.$http.get(this._boundaryChoicesUrl)
      .then(this._extractBoundaryChoicesData, this._handleError);
  }
  getLayerFilters() {
    return this.$http.get(this._layerFiltersUrl)
      .then(this._extractLayerFiltersData, this._handleError);
  }
  _extractLayerFiltersData(data) {
    let layerFilters = new LayerFilters(data.data);

    return layerFilters || {};
  }
  _extractBoundaryChoicesData(data) {
    let boundaryChoices = new BoundaryChoices(data.data);
    return boundaryChoices || {};
  }
  _handleError(error) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg);
  }
}

OptionsService.$inject = ["$http"];
