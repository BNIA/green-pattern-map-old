export class LayerFilterOption{
    key: string;    //name for server
    val: string;    //name to display
    isOn: boolean;    //whether this option is selected
    active: boolean;    //whether to gray out this option
    constructor(private _jsonObj: any) {
        this.key = _jsonObj.key;
        this.val = _jsonObj.val;
        this.isOn = _jsonObj.isOn;
        this.active = _jsonObj.active;
    }
    toJSON() {
        return {
            key: this.key,
            isOn: this.isOn
        }
    }
}
