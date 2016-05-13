import {Component,Renderer,ElementRef,OnInit} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {FeatureGroup} from 'leaflet'
import {Observable} from 'rxjs/Observable'
import {MdSidenav,MdSidenavLayout} from '@angular2-material/sidenav/sidenav'
import {OptionsService} from '../../services/options.service'
import {LayersService} from '../../services/layers.service'
import {Options} from '../../core/options'
import {UpgradeMDL} from '../../directives/upgrade-mdl'
import {LayerFilters} from '../../core/layer-filters'
import {MapComponent} from '../map/map.component'
import {LayerFiltersComponent} from '../layer-filters/layer-filters.component'
import {MainToolbarComponent} from '../main-toolbar/main-toolbar.component'

@Component({
    selector:'app',
    templateUrl:'app/components/app/app.html',
    styleUrls:['app/components/app/app.css'],
    providers: [HTTP_PROVIDERS,OptionsService,LayersService],
    directives:[MapComponent,LayerFiltersComponent,MainToolbarComponent,MdSidenavLayout,MdSidenav,UpgradeMDL],
})

export class AppComponent implements OnInit{
    map:MapComponent
    layerFilters:LayerFilters
    layerFiltersError:any
    layers:FeatureGroup<any>[]
    layersError:any
    showSidenav:boolean = true
    constructor(
        private _optionsService: OptionsService,
        private _layersService: LayersService
    ){}
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
    toggleShowSidenav(onOff:boolean){
        console.log("toggled")
        if(onOff == undefined){
            this.showSidenav = !this.showSidenav
        }
        else{
            this.showSidenav = onOff
        }
        console.log(this.showSidenav)
    }
    ngOnInit(){
        this.getOptions()
    }
}
