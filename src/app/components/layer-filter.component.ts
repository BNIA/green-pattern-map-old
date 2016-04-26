import {Component,Input,Output,ChangeDetectionStrategy,EventEmitter} from 'angular2/core';
import {LayerFilter} from '../core/layer-filter';
import {LayerFilterOptionComponent} from './layer-filter-option-component';

@Component({
    selector:'layer-filter',
    template:`
    <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
        <input type="checkbox" id="switch-1" class="mdl-switch__input" [checked]="layerFilter.active" (click)=fireActiveChange() >
        <span class="mdl-switch__label"><b>{{layerFilter.val}}</b></span>
    </label>
    <ul class="lf-list-control">
        <layer-filter-option *ngFor="#o of layerFilter.opt" [layerFilterOption]=o (layerFilterOptionChange)=fireLayerFilterChange()></layer-filter-option>
    </ul>
    `,
    directives:[LayerFilterOptionComponent],
    styles:[`
        .lf-list-control {}
    `],
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
