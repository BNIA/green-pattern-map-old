import {Component, Input, Output, ChangeDetectionStrategy, EventEmitter} from 'angular2/core';
import {LayerFilterOption} from '../core/layer-filter-option';

@Component({
    selector:'layer-filter-option',
    template:`
        <li class="mdl-list__item">
        <span class="mdl-list__item-primary-content">{{layerFilterOption.val}}</span>
            <span class="mdl-list__item-secondary-action">
                <label class="mdl-checkbox mdl-js-checkbox">
                    <input type="checkbox" class="mdl-checkbox__input" [checked]="layerFilterOption.isOn"
                    [disabled]="!layerFilterOption.active" (click)=fireToggledChange() />
                </label>
            </span>
        </li>
    `,
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerFilterOptionComponent{
    @Input() layerFilterOption:LayerFilterOption
    @Output() layerFilterOptionChange:EventEmitter<any> = new EventEmitter()
    fireToggledChange(){
        this.layerFilterOption.isOn = !this.layerFilterOption.isOn
        this.layerFilterOptionChange.emit(null)
    }
}
