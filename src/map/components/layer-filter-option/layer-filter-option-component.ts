import {Component, Input, Output, EventEmitter} from '@angular/core';
import {LayerFilterOption} from '../../core/layer-filter-option';
import {MdCheckbox} from '@angular2-material/checkbox/checkbox'

@Component({
    selector:'layer-filter-option',
    template:`
        <li class="collection-item">
            <md-checkbox [class.black-text]=layerFilterOption.active [checked]="layerFilterOption.isOn" (click)="fireIsOnChange()"
            [disabled]="!layerFilterOption.active">
                {{layerFilterOption.val}}
            </md-checkbox>
        </li>
    `,
    styles:[`
    `],
    directives:[MdCheckbox]
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerFilterOptionComponent{
    @Input() layerFilterOption:LayerFilterOption
    @Output() layerFilterOptionChange:EventEmitter<any> = new EventEmitter()
    fireIsOnChange(){
        this.layerFilterOption.isOn = !this.layerFilterOption.isOn
        this.layerFilterOptionChange.emit(null)
    }
}
