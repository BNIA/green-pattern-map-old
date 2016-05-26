export default class MapCardController {
  constructor() {
    this.imgPath = 'assets/img/map.jpg';
    this.title = 'Green Pattern Map';
    this.buttonTitle1 = 'Access Map';
    this.buttonTitle2 = 'Preconfigured Views';
  }
  clickButton(options) {
    console.log("CLICK");
    this.onClickButton(options);
  }
}

MapCardController.$inject = [];
