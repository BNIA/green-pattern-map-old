import {Component,Input} from 'angular2/core';
import {BoundaryChoice} from '../core/boundary-choice';

@Component({
    selector:'layer-filter-option',
    template:`
        <li>
        </li>
    `
})
export class BoundaryChoiceComponent{
    @Input() boundaryChoice:BoundaryChoice
}
