import {Component} from 'angular2/core';
import {OnChanges} from 'angular2/core';
import {Input} from 'angular2/core';
import {FilterOption} from '../core/filter-option';

@Component({
    selector:'filter-option',
    template:`
        <li>
            <label class="mdl-checkbox mdl-js-checkbox">
                <input type="checkbox" class="mdl-checkbox__input"[(ngModel)]="filterOption.on"/>
                <span class="mdl-checkbox__label">{{filterOption.val}}</span>
            </label>
        </li>
    `
})
export class FilterOptionComponent implements OnChanges{
    @Input() filterOption:FilterOption
    ngOnChanges(){
        console.log("CHANGED" + this.filterOption.key)
    }
}
