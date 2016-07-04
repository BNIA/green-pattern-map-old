import map from 'lodash/map';

export default class LayersService {
  constructor($http) {
    this.$http = $http;
    this._layersUrl = '/layers';
  }
  getLayers(data) {
    // console.log(data);
    return this.$http.post(this._layersUrl, data.toJSON())
      .then(this._extractLayersData)
      .catch(this._handleError);
  }
  _extractLayersData(data) {
    // -76 = long
    var layers = map(data.data, d => {
      var lng = d.geometry.coordinates[0];
      var lat = d.geometry.coordinates[1];
      var properties = d.properties;
      return {lat, lng, properties};
    });
    return layers;
  }
  _handleError(error) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg);
  }
}

LayersService.$inject = ["$http"];
