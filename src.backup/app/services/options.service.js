export default class OptionsService {
  constructor($http) {
    this.$http = $http;
    this._layerFiltersUrl = '/options/layer_filters';
    this._boundaryChoicesUrl = '/options/boundary_choices';
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

OptionsService.$inject = ["$http"];