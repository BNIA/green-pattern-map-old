import {Component,Output,EventEmitter} from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
    selector:'main-toolbar',
    templateUrl:'app/components/main-toolbar/main-toolbar.html',
    styleUrls:['app/components/main-toolbar/main-toolbar.css'],
    directives:[MaterializeDirective],
    providers:[]
})

export class MainToolbarComponent{
    layersActive:boolean = true
    boundariesActive:boolean = false
    vitalSignsActive:boolean = false
    @Output() menuClicked:EventEmitter<any> = new EventEmitter()
    fireMenuClicked(){
        this.menuClicked.emit(null)
    }
}
