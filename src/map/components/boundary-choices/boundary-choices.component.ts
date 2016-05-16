import {Component,Input,Output,OnInit,OnChanges,EventEmitter} from '@angular/core'
//import {MDL} from '../directives/mdl.directive';
import {BoundaryChoices} from '../../core/boundary-choices';
import {LayerFilterComponent} from '../layer-filter/layer-filter.component'
import {UpgradeMDL} from '../../directives/upgrade-mdl'

@Component({
    selector:'boundary-choices',
    templateUrl:'app/components/boundary-choices/boundary-choices.html',
    styleUrls:['app/components/boundary-choices/boundary-choices.css'],
    directives:[LayerFilterComponent,UpgradeMDL],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoundaryChoicesComponent implements OnChanges{
    @Input() boundaryChoices:BoundaryChoices
    @Output() boundaryChoicesChange:EventEmitter<any> = new EventEmitter();
    fireBoundaryChoicesChange(key:string){
        this.boundaryChoices.selectBoundary(key)
        this.boundaryChoicesChange.emit(null)
    }
    ngOnChanges(){

    }
}
