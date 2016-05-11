import {Component} from '@angular/core'
import {MapCardComponent} from './map-card.component'
import {GpbCardComponent} from './gpb-card.component'
import {DescCardComponent} from './desc-card.component'
import {PhasesCardComponent} from './phases-card.component'

@Component({
    selector:'content',
    templateUrl:'app/templates/content.html',
    styleUrls:['app/styles/content.css'],
    directives:[MapCardComponent,GpbCardComponent,DescCardComponent,PhasesCardComponent]
})

export class ContentComponent{

}
