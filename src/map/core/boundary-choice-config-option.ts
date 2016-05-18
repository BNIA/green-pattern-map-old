export class BoundaryChoiceConfigOption{
    key:string
    val:string
    isOn:boolean
    active:boolean
    properties:any
    constructor(private _jsonObj){
        this.key = _jsonObj.key
        this.val = _jsonObj.val
        this.isOn = _jsonObj.isOn
        this.active = _jsonObj.active
        this.properties = _jsonObj.properties || {}
    }
    toJSON(){
        return {
            key:this.key,
            isOn:this.isOn,
            active:this.active
        }
    }
}
