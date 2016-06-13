export default class BoundaryChoiceConfigOption {
  constructor(_jsonObj) {
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.isOn = _jsonObj.isOn || false;
    this.active = _jsonObj.active || false;
    this.properties = _jsonObj.properties;
  }
  toJSON() {
    return {
      key: this.key,
      active: this.active,
      isOn: this.isOn
    };
  }
}
