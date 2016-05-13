import {Component,Input,Output,OnInit,ChangeDetectionStrategy,OnChanges,EventEmitter,AfterViewInit} from '@angular/core'
//import {MDL} from '../directives/mdl.directive';
import {LayerFilters} from '../../core/layer-filters';
import {LayerFilterComponent} from '../layer-filter/layer-filter.component'
import {UpgradeMDL} from '../../directives/upgrade-mdl'
declare var componentHandler:any

@Component({
    selector:'layer-filters',
    templateUrl:'app/components/layer-filters/layer-filters.html',
    styles:[``],
    directives:[LayerFilterComponent,UpgradeMDL],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerFiltersComponent implements OnChanges,AfterViewInit{
    @Input() layerFilters:LayerFilters
    @Output() layerFiltersChange:EventEmitter<any> = new EventEmitter();
    fireLayerFiltersChange(){
        this.layerFiltersChange.emit(null)
    }
    ngOnChanges(){

    }
    ngAfterViewInit(){
    }
}
