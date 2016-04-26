import {Component,Renderer,ElementRef,OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {MDL} from '../directives/mdl.directive';

import {MapComponent} from './map.component'
import {OptionsService} from '../services/options.service';
import {LayersService} from '../services/layers.service';
import {LayerFiltersComponent} from './layer-filters.component';
import {Options} from '../core/options';
import {LayerFilters} from '../core/layer-filters';

@Component({
    selector:'app',
    template:`
    <div mdl class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <div class="mdl-layout__drawer">
            <layer-filters mdl [layerFilters] = "layerFilters" (layerFiltersChange) = getLayers() ></layer-filters>
        </div>
        <main mdl id="mymain" class="mdl-layout__content">
            <map [layers] = "layers"></map>
        </main>
    </div>

    `,
    styles:[`
        .map{
            width:100%;
            height:100%;
        }
        #mymain{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            z-index:98;
        }
    `],
    providers: [HTTP_PROVIDERS,OptionsService,LayersService],
    directives:[MapComponent,LayerFiltersComponent,MDL],
})

export class AppComponent implements OnInit{
    map:MapComponent
    layerFilters:LayerFilters
    layerFiltersError:any
    layers:L.GeoJSON[]
    layersError:any
    constructor(private _optionsService: OptionsService,private _layersService: LayersService){}
    getOptions(){
        this._optionsService.getLayerFilters()
            .subscribe(
                layerFilters => this.layerFilters = layerFilters,
                error => this.layerFiltersError = error
            )
    }
    getLayers(){
        this._layersService.getLayers(this.layerFilters)
            .subscribe(
                layers => this.layers = layers,
                error => this.layersError = error
            )
    }
    ngOnInit(){
        this.getOptions()
    }
}
