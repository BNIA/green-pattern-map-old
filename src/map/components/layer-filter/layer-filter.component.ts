import {Component,Input,Output,ChangeDetectionStrategy,EventEmitter} from '@angular/core';
import {LayerFilter} from '../../core/layer-filter';
import {LayerFilterOptionComponent} from '../layer-filter-option/layer-filter-option-component';
import {MdCheckbox} from '@angular2-material/checkbox/checkbox'
//import {MaterialDesignLiteDirective} from '../directives/material-design-lite.directive';
//import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    selector:'layer-filter',
    template:`
    <md-checkbox [checked]="layerFilter.active" (click)=fireActiveChange()>{{ layerFilter.val }}</md-checkbox>
    <ul class="collection">
        <layer-filter-option *ngFor="#o of layerFilter.opt" [layerFilterOption]=o (layerFilterOptionChange)=fireLayerFilterChange()></layer-filter-option>
    </ul>
    `,
    directives:[LayerFilterOptionComponent,MdCheckbox],
    //
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerFilterComponent{
    @Input() layerFilter:LayerFilter
    @Output() layerFilterChange:EventEmitter<any> = new EventEmitter()
    fireActiveChange(){
        this.layerFilter.toggleActive()
        this.fireLayerFilterChange()
    }
    fireLayerFilterChange(){
        this.layerFilterChange.emit(null)
    }
}
