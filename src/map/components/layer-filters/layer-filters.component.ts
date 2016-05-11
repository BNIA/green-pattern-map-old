import {Component,Input,Output,OnInit,ChangeDetectionStrategy,OnChanges,EventEmitter} from '@angular/core'
//import {MDL} from '../directives/mdl.directive';
import {LayerFilters} from '../../core/layer-filters';
import {LayerFilterComponent} from '../layer-filter/layer-filter.component'

@Component({
    selector:'layer-filters',
    template:`
        <span class="mdl-layout-title">Community Managed Open Spaces</span>
        <layer-filter *ngFor="#c of layerFilters?.cg" [layerFilter] = c (layerFilterChange)=fireLayerFiltersChange()></layer-filter>
        <span class="mdl-layout-title">Stormwater Management</span>
        <layer-filter *ngFor="#s of layerFilters?.sw" [layerFilter] = s (layerFilterChange)=fireLayerFiltersChange()></layer-filter>
    `,
    styles:[``],
    directives:[LayerFilterComponent],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerFiltersComponent implements OnChanges{
    @Input() layerFilters:LayerFilters
    @Output() layerFiltersChange:EventEmitter<any> = new EventEmitter();
    fireLayerFiltersChange(){
        this.layerFiltersChange.emit(null)
    }
    ngOnChanges(){

    }
}