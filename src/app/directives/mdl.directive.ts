// solution from: http://stackoverflow.com/questions/34421919/integrating-material-design-lite-with-angular2
import {Directive, AfterViewInit} from 'angular2/core';
declare var componentHandler;

@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewInit{
    //may need to do an onChanges if something changes in the component
    ngAfterViewInit(){
        componentHandler.upgradeAllRegistered()
    }
}
