import {Component, Input, Output, EventEmitter} from '@angular/core';
import {LayerFilterOption} from '../../core/layer-filter-option';
import {UpgradeMDL} from '../../directives/upgrade-mdl'

@Component({
    selector:'layer-filter-option',
    templateUrl:'app/components/layer-filter-option/layer-filter-option.html',
    styles:[],
    directives:[UpgradeMDL]
})
export class LayerFilterOptionComponent{
    @Input() layerFilterOption:LayerFilterOption
    @Output() layerFilterOptionChange:EventEmitter<any> = new EventEmitter()
    fireIsOnChange(){
        this.layerFilterOption.isOn = !this.layerFilterOption.isOn
        this.layerFilterOptionChange.emit(null)
    }
}
