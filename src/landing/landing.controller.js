import angular from 'angular';

export default class LandingController {
  constructor($scope) {
    this.title = "Green Pattern Map";
    $scope.$on('onMapAccess', () => {
      console.log("this is the map access!");
    });
  }
}

LandingController.$inject = ['$scope'];
