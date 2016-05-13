export class BoundaryChoice{
    key:string;
    val:string;
    isOn:boolean;
    active:boolean;
    constructor(private _jsonObj:any){
        this.key = _jsonObj.key
        this.val = _jsonObj.val
        this.isOn = _jsonObj.isOn
        this.active = _jsonObj.active
    }
    toJSON():any{
        return {
            key:this.key,
            isOn:this.isOn,
            active:this.active
        }
    }
}
