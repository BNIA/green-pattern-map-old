import {Component} from '@angular/core'
import {UpgradeMDL} from '../directives/upgrade-mdl'

@Component({
    selector:'map-card',
    templateUrl:'app/templates/map-card.html',
    styles:[`
        .my-card{
            width:auto;
        }
        .my-card > .mdl-card__title {
            background: url('app/assets/map.jpg') bottom right 15% no-repeat #46B6AC;
        }

    `],
    directives:[UpgradeMDL]  
})

export class MapCardComponent{
    
}