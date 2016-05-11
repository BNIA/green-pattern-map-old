import {Component} from '@angular/core'
import {UpgradeMDL} from '../directives/upgrade-mdl'

@Component({
    selector:'main-toolbar',
    templateUrl:'app/templates/main-toolbar.html',
    styleUrls:['app/styles/main-toolbar.css'],
    providers: [],
    directives:[UpgradeMDL],
})

export class MainToolbarComponent{}
