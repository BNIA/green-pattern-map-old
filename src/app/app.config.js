let locationConfig = function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });
};

locationConfig.$inject = ['$locationProvider'];

export {locationConfig};
