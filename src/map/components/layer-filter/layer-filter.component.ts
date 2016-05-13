import {Component,Input,Output,ChangeDetectionStrategy,EventEmitter} from '@angular/core';
import {LayerFilter} from '../../core/layer-filter';
import {LayerFilterOptionComponent} from '../layer-filter-option/layer-filter-option-component';
import {UpgradeMDL} from '../../directives/upgrade-mdl'

//import {MaterialDesignLiteDirective} from '../directives/material-design-lite.directive';
//import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    selector:'layer-filter',
    templateUrl:'app/components/layer-filter/layer-filter.html',
    styleUrls:['app/components/layer-filter/layer-filter.css'],
    directives:[LayerFilterOptionComponent,UpgradeMDL],
    //
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerFilterComponent{
    @Input() layerFilter:LayerFilter
    @Output() layerFilterChange:EventEmitter<any> = new EventEmitter()
    isCollapsed:boolean = false
    fireActiveChange(){
        this.layerFilter.toggleActive()
        this.fireLayerFilterChange()
    }
    fireLayerFilterChange(){
        this.layerFilterChange.emit(null)
    }
}
