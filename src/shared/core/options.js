import opts from './options.json!';

var option0 = {
  key: "default",
  val: "Default",
  desc: "No layers, no boundaries, no indicators",
  opts: opts
}

var option1 = {
  key: "opt1",
  val: "Median Household Income with Community Managed Open Spaces",
  opts: opts
}

let options = [option0, option1];

export default option0;
export {
  options
};
