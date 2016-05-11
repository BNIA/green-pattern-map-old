import {Component} from '@angular/core'
import {UpgradeMDL} from '../directives/upgrade-mdl'

@Component({
    selector:'desc-card',
    templateUrl:'app/templates/desc-card.html',
    styleUrls:['app/styles/desc-card.css'],
    directives:[UpgradeMDL]
})

export class DescCardComponent{

}
