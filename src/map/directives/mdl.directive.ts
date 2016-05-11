
import {Directive, AfterViewInit, ViewChild} from '@angular/core'; 

@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewInit{
    @ViewChild('child') child:any
    //may need to do an onChanges if something changes in the component
    constructor() {}
    ngAfterViewInit(){
        window['componentHandler'].upgradeAllRegistered()
    }
}