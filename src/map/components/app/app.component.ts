import {Component,Renderer,ElementRef,OnInit} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {FeatureGroup,GeoJSON} from 'leaflet'
import {Observable} from 'rxjs/Observable'
import {MdSidenav,MdSidenavLayout} from '@angular2-material/sidenav/sidenav'
import {OptionsService} from '../../services/options.service'
import {LayersService} from '../../services/layers.service'
import {BoundariesService} from '../../services/boundaries.service'
import {Options} from '../../core/options'
import {UpgradeMDL} from '../../directives/upgrade-mdl'
import {LayerFilters} from '../../core/layer-filters'
import {BoundaryChoices} from '../../core/boundary-choices'
import {MapComponent} from '../map/map.component'
import {LayerFiltersComponent} from '../layer-filters/layer-filters.component'
import {BoundaryChoicesComponent} from '../boundary-choices/boundary-choices.component'
import {MainToolbarComponent} from '../main-toolbar/main-toolbar.component'

@Component({
    selector:'app',
    templateUrl:'app/components/app/app.html',
    styleUrls:['app/components/app/app.css'],
    providers: [HTTP_PROVIDERS,OptionsService,LayersService,BoundariesService],
    directives:[MapComponent,LayerFiltersComponent,BoundaryChoicesComponent,MainToolbarComponent,MdSidenavLayout,MdSidenav,UpgradeMDL],
})

export class AppComponent implements OnInit{
    map:MapComponent
    layerFilters:LayerFilters
    layerFiltersError:any
    layers:FeatureGroup<any>[]
    layersError:any
    boundaryChoices:BoundaryChoices
    boundaryChoicesError:any
    boundaries:GeoJSON[]
    boundariesError:any
    showSidenav:boolean = false
    constructor(
        private _optionsService: OptionsService,
        private _layersService: LayersService,
        private _boundariesService: BoundariesService
    ){}
    getLayerFilters(){
        this._optionsService.getLayerFilters()
            .subscribe(
                layerFilters => this.layerFilters = layerFilters,
                error => this.layerFiltersError = error
            )
    }
    getBoundaryChoices(){
        this._optionsService.getBoundaryChoices()
            .subscribe(
                boundaryChoices => this.boundaryChoices = boundaryChoices,
                error => this.boundaryChoicesError = error
            )
    }
    getLayers(){
        this._layersService.getLayers(this.layerFilters)
            .subscribe(
                layers => this.layers = layers,
                error => this.layersError = error
            )
    }
    getBoundaries(){
        this._boundariesService.getBoundaries(this.boundaryChoices)
            .subscribe(
                boundaries => this.boundaries = boundaries,
                error => this.boundariesError = error
            )
    }
    toggleShowSidenav(onOff:boolean){
        if(onOff == undefined){
            this.showSidenav = !this.showSidenav
        }
        else{
            this.showSidenav = onOff
        }
    }
    ngOnInit(){
        this.getBoundaryChoices()
        this.getLayerFilters()
    }
}
