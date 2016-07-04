export default class LayerFilterOption {
  constructor(_jsonObj, parent) {
    this.key = _jsonObj.key;
    this.val = _jsonObj.val;
    this.isOn = _jsonObj.isOn;
    this.active = _jsonObj.active;
    this.type = 'layer-filter-option';
    this.parent = parent;
  }
  alertChange() {
    var self = this;
    this.parent.onChildChange(self);
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
