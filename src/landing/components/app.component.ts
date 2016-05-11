import {Component} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {MainToolbarComponent} from './main-toolbar.component'
import {ContentComponent} from './content.component'
import {UpgradeMDL} from '../directives/upgrade-mdl'
declare var componentHandler:any

@Component({
    selector:'app',
    templateUrl:'app/templates/app.html',
    styles:[`
        main{
            background-color:#f5f5f5;
        }
    `],
    providers: [HTTP_PROVIDERS],
    directives:[MainToolbarComponent,ContentComponent,UpgradeMDL],
})

export class AppComponent{
}