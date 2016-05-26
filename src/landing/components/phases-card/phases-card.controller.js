class Phase {
  constructor(shortName, name, imgPath) {
    this.shortName = shortName;
    this.name = name;
    this.imgPath = imgPath;
    this.avatarClass = "my-phases-card-" + this.shortName + "-avatar";
  }
}

export default class PhasesCardController {
  constructor(){
    this.cmos = new Phase('cmos', 'Community Managed Open Spaces', 'assets/img/cmos.png');
    this.sw = new Phase('sw', 'Stormwater Management', 'assets/img/sw.png');
    this.uf = new Phase('uf', 'Urban Forest And Buffer', 'assets/img/uf.png');
    this.clgr = new Phase('clgr', 'Clean and Green', 'assets/img/clgr.png');
    this.mg = new Phase('mg', 'Mixed Greens', 'assets/img/mg.png');
    this.np = new Phase('np', 'Neighborhood Parks', 'assets/img/np.png');
    this.gp = new Phase('gp', 'Green Parking', 'assets/img/gp.png');
    this.ua = new Phase('ua', 'Urban Agriculture', 'assets/img/ua.png');

    this.current = [this.cmos, this.sw, this.uf];
    this.future = [this.clgr, this.mg, this.np, this.gp, this.ua];
  }
}
