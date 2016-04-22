export class FilterOption{
    key: string;    //name for server
    val: string;    //name to display
    on: boolean;    //whether this option is selected
    constructor(private _jsonObj: any) {
        this.key = _jsonObj.key;
        this.val = _jsonObj.val;
        this.on = _jsonObj.on;
    }
    toJSON() {
        return {
            key: this.key,
            on: this.on
        }
    }
}
