import {LayerFilters} from './layer-filters';
import {BoundaryChoices} from './boundary-choices';

export class Options{
    layerFilters:LayerFilters
    boundaryChoices:BoundaryChoices
    constructor(private _jsonObj?:any){
        this.layerFilters = new LayerFilters(_jsonObj.layer_filters)
        this.boundaryChoices = new BoundaryChoices(_jsonObj.boundary_choices)
    }
}
