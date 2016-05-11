import {Component,Renderer,ElementRef,OnInit} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {MapComponent} from '../map/map.component'
import {OptionsService} from '../../services/options.service'
import {LayersService} from '../../services/layers.service'
import {LayerFiltersComponent} from '../layer-filters/layer-filters.component'
import {Options} from '../../core/options'
import {LayerFilters} from '../../core/layer-filters'
import {MainToolbarComponent} from '../main-toolbar/main-toolbar.component'
import {MdSidenav,MdSidenavLayout} from '@angular2-material/sidenav/sidenav'
import {FeatureGroup} from 'leaflet'

@Component({
    selector:'app',
    templateUrl:'app/components/app/app.html',
    styles:[`
    `],
    providers: [HTTP_PROVIDERS,OptionsService,LayersService],
    directives:[MapComponent,LayerFiltersComponent,MainToolbarComponent,MdSidenav,MdSidenavLayout],
})

export class AppComponent implements OnInit{
    map:MapComponent
    layerFilters:LayerFilters
    layerFiltersError:any
    layers:FeatureGroup<any>[]
    layersError:any
    showLayerFilters:boolean = false
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
    toggleShowLayerFilters(onOff:boolean){
        if(onOff == undefined){
            this.showLayerFilters = !this.showLayerFilters
        }
        else{
            this.showLayerFilters = onOff
        }
    }
    ngOnInit(){
        this.getOptions()
    }
}
