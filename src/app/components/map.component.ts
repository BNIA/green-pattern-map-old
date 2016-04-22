import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Input} from 'angular2/core';
import * as test from '../core/test';
import * as myTileLayers from '../core/tile-layers';

@Component({
    selector:'map',
    template:'<div id=map></div>',
    styles:[`
    #map{
        height:100%;
        width:100%;
    `]
})

export class MapComponent {
    map:L.Map
    boundary:L.GeoJSON
    @Input() layers:L.GeoJSON

    initialize(){
        this.map = new L.Map('map',{
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
        this.initialize()
    }
}
