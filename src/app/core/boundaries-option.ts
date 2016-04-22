export class BoundariesOption{
    key:string;
    val:string;
    on:boolean;
    constructor(private _jsonObj:any){
        this.key = _jsonObj.key
        this.val = _jsonObj.val
        this.on = _jsonObj.on
    }
}
