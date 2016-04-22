import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Filter} from '../core/filter';
import {FilterOptionComponent} from './filter-option-component';
import {MDL} from '../directives/mdl.directive';

@Component({
    selector:'filter',
    template:`
    <h2>{{filter.val}}</h2>
    <ul mdl class="demo-list-control">
        <filter-option *ngFor="#o of filter.opt" [filterOption]=o></filter-option>
    </ul>
    `,
    directives:[FilterOptionComponent,MDL],
    styles:[`
        .demo-list-control { width: 300px;}
    `]
})
export class FilterComponent{
    @Input() filter:Filter;
}
