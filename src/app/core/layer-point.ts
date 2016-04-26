export class LayerPoint{
    geoJSON:L.GeoJSON
    props:any
    marker:L.Marker
    constructor(_jsonObj:any){
        this.geoJSON = new L.GeoJSON(_jsonObj)
        this.props = _jsonObj.properties
        this.marker = L.geoJson(this.geoJSON,{
            pointToLayer:(feature,latlng) => {
                return new L.Marker(latlng)
            }
        })
    }
}
