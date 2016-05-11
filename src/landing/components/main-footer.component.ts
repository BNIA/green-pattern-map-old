import {Component} from '@angular/core'
import {UpgradeMDL} from '../directives/upgrade-mdl'

@Component({
    selector:'main-footer',
    templateUrl:'app/templates/main-footer.html',
    styleUrls:['app/styles/main-footer.css'],
    providers: [],
    directives:[UpgradeMDL],
})

export class MainFooterComponent{}
