export default class LayerFilterOption {
  constructor(_jsonObj) {
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.isOn = _jsonObj.isOn;
    this.active = _jsonObj.active;
  }
  toJSON() {
    return {
      key: this.key,
      val: this.val,
      isOn: this.isOn,
      active: this.active
    };
  }
}
