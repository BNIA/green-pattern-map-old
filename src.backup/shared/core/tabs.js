import findIndex from 'lodash';

let mapTab = '/Map';

let homeTab = '/Home';

let tabs = [mapTab, homeTab];

let initTab = homeTab;

let findTabIndex = function(tab) {
  return findIndex(tabs, tab);
};

export default tabs;
export {tabs, findTabIndex, initTab};
