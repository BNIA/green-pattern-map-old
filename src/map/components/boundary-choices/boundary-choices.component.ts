import {Component,Input,Output,OnInit,OnChanges,EventEmitter} from '@angular/core'
//import {MDL} from '../directives/mdl.directive';
import {BoundaryChoices} from '../../core/boundary-choices';
import {LayerFilterComponent} from '../layer-filter/layer-filter.component'
import {UpgradeMDL} from '../../directives/upgrade-mdl'

@Component({
    selector:'boundary-choices',
    templateUrl:'app/components/boundary-choices/boundary-choices.html',
    styles:[``],
    directives:[LayerFilterComponent,UpgradeMDL],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoundaryChoicesComponent implements OnChanges{
    @Input() boundaryChoices:BoundaryChoices
    @Output() boundaryChoicesChange:EventEmitter<any> = new EventEmitter();
    fireBoundaryChoicesChange(){
        this.boundaryChoicesChange.emit(null)
    }
    ngOnChanges(){
        console.log("changed")
    }
}
