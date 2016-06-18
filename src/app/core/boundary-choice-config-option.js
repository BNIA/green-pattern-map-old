export default class BoundaryChoiceConfigOption {
  constructor(_jsonObj, parent) {
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.isOn = _jsonObj.isOn || false;
    this.active = _jsonObj.active || false;
    this.properties = _jsonObj.properties;
    this.parent = parent;
  }
  toJSON() {
    return {
      key: this.key,
      active: this.active,
      isOn: this.isOn
    };
  }
  alertChange() {
    this.parent.toggleOtherOptsOff(this.key);
  }
  toggleIsOn(onOff) {
    if (onOff === undefined) {
      this.isOn = !this.isOn;
    } else {
      this.isOn = onOff;
    }
    if (this.isOn === true) {
      this.alertChange();
    }
  }
}
