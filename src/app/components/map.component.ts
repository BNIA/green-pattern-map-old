import {Component,OnInit,OnChanges,SimpleChange} from 'angular2/core';
import {Input} from 'angular2/core';
import * as test from '../core/test';
import * as myTileLayers from '../core/tile-layers';

@Component({
    selector:'map',
    template:`
    <main mdl id="mymap" class="mdl-layout__content">
    </main>
    `,
    styles:[`
    #mymap{
        height:100%;
        width:100%;
    `],
    directives:[]
})

export class MapComponent implements OnChanges, OnInit{
    @Input() boundary:L.GeoJSON
    @Input() layers:L.GeoJSON[]
    map:L.Map
    markers:L.FeatureGroup<any>
    initialize(){
        this.map = new L.Map('mymap',{
            'center': new L.LatLng(39.2854197594374, -76.61796569824219),
            'zoom' : 12,
            minZoom: 0,
            maxZoom: 18,
            'zoomControl' : false,
            layers:[myTileLayers.cartodbPositron]
        })
        var p = new L.GeoJSON(test.poly[1])
        p.addTo(this.map)
        this.map.removeLayer(p)
        //L.geoJson(test.poly[1]).addTo(this.map)
    }
    ngOnInit(){
        //this is called when the component initializes
        this.initialize()
    }
    ngOnChanges(changes: {[ propName: string]: SimpleChange}){
        //this is called whenever the input value changes
        //watch out for immutables
        if(this.layers){
            if(this.markers){
                this.map.removeLayer(this.markers)
            }
            this.markers = new L.FeatureGroup()
            _.forEach(this.layers,(p) => {
                this.markers.addLayer(p)
            })
            console.log(this.markers)
            this.markers.addTo(this.map)
        }

    }
}
