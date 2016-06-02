import options from './options';

class Phase {
  constructor(shortName, name, imgPath = '', active = false, layerFilters = [],
    allOn = false) {
    this.shortName = shortName;
    this.name = name;
    this.imgPath = imgPath;
    this.active = active;
    this.layerFilters = layerFilters;
    this.allOn = allOn;
    console.log(this.layerFilters);
    this.avatarClass = "my-phases-card-" + this.shortName + "-avatar";
  }
}

let cmos = new Phase('cmos', 'Community Managed Open Spaces',
  'assets/img/cmos.png', false, options.opts.layerFilters.cg, options.allCG);
let sw = new Phase('sw', 'Stormwater Management', 'assets/img/sw.png', false,
  options.opts.layerFilters.sw, options.opts.allSW);
let uf = new Phase('uf', 'Urban Forest And Buffer', 'assets/img/uf.png');
let gl = new Phase('gl', 'Global Filters', false,
  options.opts.layerFilters['global'], false);
let clgr = new Phase('clgr', 'Clean and Green', 'assets/img/clgr.png');
let mg = new Phase('mg', 'Mixed Greens', 'assets/img/mg.png');
let np = new Phase('np', 'Neighborhood Parks', 'assets/img/np.png');
let gp = new Phase('gp', 'Green Parking', 'assets/img/gp.png');
let ua = new Phase('ua', 'Urban Agriculture', 'assets/img/ua.png');

let current = [cmos, sw, uf];
let future = [clgr, mg, np, gp, ua];
let phases = [cmos, sw, uf, clgr, mg, np, gp, ua];

export {Phase, current, future, phases, sw, cmos, gl, uf, clgr, mg, np, gp, ua};
