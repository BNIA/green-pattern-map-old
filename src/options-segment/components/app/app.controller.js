export default class AppController {
  constructor() {
    console.log("CONSTRUCT MEE");
  }
  $onChanges(changes) {
    console.log(changes);
    console.log(this.layerFilters);
  }
}

AppController.$inject = [];
