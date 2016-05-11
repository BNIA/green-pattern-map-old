import {Component} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {MainToolbarComponent} from './main-toolbar.component'
import {MainFooterComponent} from './main-footer.component'
import {ContentComponent} from './content.component'
import {UpgradeMDL} from '../directives/upgrade-mdl'

@Component({
    selector:'app',
    templateUrl:'app/templates/app.html',
    styleUrls:['app/styles/app.css'],
    providers: [HTTP_PROVIDERS],
    directives:[MainToolbarComponent,ContentComponent,MainFooterComponent,UpgradeMDL],
})

export class AppComponent{
}
