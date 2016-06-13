let mdIconConfig = function($mdIconProvider) {
  $mdIconProvider
    .fontSet('md', 'material-icons') // register material icons
    .icon('logo', 'assets/svg/logo.svg');
};

mdIconConfig.$inject = ["$mdIconProvider"];

export default mdIconConfig;
