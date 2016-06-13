import './options-segment.globals';
import angular from 'angular';

// Import Configuration
import mdThemeConfig from '../shared/md-theme-config';
import mdIconConfig from '../shared/md-icon-config';

// Import Components
import AppComponent from './components/app/app.component';
import LayerFiltersComponent from
  './components/layer-filters/layer-filters.component';

// Load dependences:
// Other libs, and internal modules
let dependencies = [
  'ngMaterial'
];

let optionsSegment = angular.module('optionsSegment', dependencies);

// Configure app
optionsSegment.config(mdThemeConfig);
optionsSegment.config(mdIconConfig);

// Load components into the app
optionsSegment.component('optionsSegment', AppComponent);
optionsSegment.component('layerFilters', LayerFiltersComponent);

export default optionsSegment;
