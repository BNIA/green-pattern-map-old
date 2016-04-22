import {Component,Renderer,ElementRef} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {MapComponent} from './map.component'
import {OptionsComponent} from './options.component';
import {OptionsService} from '../services/options.service';
import {FilterComponent} from './filter.component';
import {Options} from '../core/options';
import {OnInit} from 'angular2/core';

@Component({
    selector:'app',
    template:`
    <map [layers]=layers></map>
    <filter *ngFor="#filter of options.filters"></filter>
    `,
    providers: [HTTP_PROVIDERS,OptionsService],
    directives:[MapComponent,FilterComponent],
})

export class AppComponent implements OnInit{
    map:MapComponent
    options:Options
    layers:L.GeoJSON
    listenFunc:Function
    constructor(private _optionsService: OptionsService,elementRef: ElementRef, renderer: Renderer){
        // this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', (event) => {
        //     console.log(this.foc)
        // });
        // this.foc = new Filter({
        //     'key':'filter',
        //     'val':'MyFilter',
        //     'allon':false,
        //     'opt':[
        //         {'key':'hi','val':"HI",on:false},
        //         {'key':'hello','val':"HELLO",on:false}
        //     ]
        // })
        // console.log(this.foc)
    }
    ngOnInit(){
        this._optionsService.getOptions()
            .then((options) => {
                this.options = options
            })
    }
}
