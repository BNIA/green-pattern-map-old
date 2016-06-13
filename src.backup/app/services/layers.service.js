export default class LayersService {
  constructor($http) {
    this.$http = $http;
    this._layersUrl = '/layers';
  }
  getLayers() {
    return this.$http.get(this._layersUrl)
      .then(this._extractLayersData)
      .catch(this._handleError);
  }
  _extractLayersData(data) {
    console.log(data);
  }
  _handleError(error) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg);
  }
}

LayersService.$inject = ["$http"];
