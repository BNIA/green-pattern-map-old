// import { Component }         from 'angular2/core';
// import { LayerFilters } from '../core/filters';
// import { Boundaries } from '../core/boundaries';
// import { HTTP_PROVIDERS }    from 'angular2/http';
// import {OptionsService} from '../services/options.service';
// import {OnInit} from 'angular2/core';
//
// @Component({
//     selector: 'options',
//     template:`
//         <h1>These are Options<h1>
//         <ul></ul>
//     `,
//     providers: [
//         HTTP_PROVIDERS
//     ]
// })
// export class OptionsComponent implements OnInit {
//     errorMsg:any;
//     constructor(private _optionsService: OptionsService) {}
//     ngOnInit(){
//         this.getOptions()
//     }
//     getOptions() {
//         this._optionsService.getOptions()
//             .subscribe((data) => {
//             })
//     }
// }
