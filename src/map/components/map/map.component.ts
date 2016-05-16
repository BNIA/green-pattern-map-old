import {Component,OnInit,OnChanges,SimpleChange} from '@angular/core';
import {Input} from '@angular/core';
import {GeoJSON,Map,FeatureGroup,LatLng,geoJson} from 'leaflet'
import * as myTileLayers from '../../core/tile-layers';
import {forEach} from 'lodash'

@Component({
    selector:'map',
    template:`
    <div class="my-map" id="my-map">
    </div>
    `,
    styles:[`
        #my-map{
            width:100%;
            height:100%;
        }
    `],
    directives:[]
})

export class MapComponent implements OnChanges, OnInit{
    @Input() boundaries:GeoJSON[]
    @Input() layers:FeatureGroup<any>[]
    map:Map
    currentLayers:FeatureGroup<any>[]
    currentBoundaries:GeoJSON[]
    initialize(){
        this.map = new Map('my-map',{
            'center': new LatLng(39.2854197594374, -76.61796569824219),
            'zoom' : 12,
            minZoom: 0,
            maxZoom: 18,
            'zoomControl' : false,
            layers:[myTileLayers.cartodbPositron]
        })
    }
    ngOnInit(){
        //this is called when the component initializes
        this.initialize()
    }
    ngOnChanges(changes: {[ propName: string]: SimpleChange}){
        console.log(changes)
        //this is called whenever the input value changes
        //watch out for immutables
        if(this.layers){
            if(this.currentLayers){
                forEach(this.currentLayers,(c) => {
                    this.map.removeLayer(c)
                })
            }
            forEach(this.layers,(l) => {
                l.addTo(this.map)
            })
            this.currentLayers = this.layers
        }
        if(this.boundaries){
            forEach(this.currentBoundaries, (c) => {
                this.map.removeLayer(c)
            })

            forEach(this.boundaries,(b) => {
                b.addTo(this.map)
            })
            this.currentBoundaries = this.boundaries
        }
    }
}
