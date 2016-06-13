import LayerFilter from './layer-filter';

export default class LayerFilters {
  constructor(_jsonObj) {
    this.sw = new LayerFilter(_jsonObj.sw);
    this.cg = new LayerFilter(_jsonObj.cg);
    this.allCG = _jsonObj.allCG;
    this.allSW = _jsonObj.allSW;
  }
  toJSON() {
    return {
      sw: this.sw.toJSON(),
      cg: this.cg.toJSON(),
      allCG: this.allCG,
      allSW: this.allSW
    };
  }
}
