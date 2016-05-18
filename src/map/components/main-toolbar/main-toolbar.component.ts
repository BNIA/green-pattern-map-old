import {Component,Input,Output,EventEmitter} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar'
import {LayerFilters} from '../../core/layer-filters';
import {UpgradeMDL} from '../../directives/upgrade-mdl'

@Component({
    selector:'main-toolbar',
    templateUrl:'app/components/main-toolbar/main-toolbar.html',
    styleUrls:['app/components/main-toolbar/main-toolbar.css'],
    directives:[MdToolbar,UpgradeMDL],
    providers:[]
})

export class MainToolbarComponent{
    @Output() menuButtonClicked:EventEmitter<any> = new EventEmitter()
    fireMenuButtonClicked(){
        this.menuButtonClicked.emit(null)
    }
    public search = false;
    showSearch() {
      this.search = !this.search;
    }
}
