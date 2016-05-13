import {Directive,ElementRef,OnChanges,AfterViewInit,Output,EventEmitter} from '@angular/core'

declare var componentHandler:any

@Directive({
    selector:'[upgrade-mdl]'
})

export class UpgradeMDL implements OnChanges,AfterViewInit{
    constructor(private elementRef:ElementRef){}
    @Output() upgradedMDL:EventEmitter<any> = new EventEmitter<any>()
    ngOnChanges(){this.upgrade()}
    ngAfterViewInit(){this.upgrade()}
    upgrade(){
        console.log(this.elementRef.nativeElement)
        componentHandler.upgradeElement(this.elementRef.nativeElement)
        this.upgradedMDL.emit(null)
    }
}
