import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';
import {Filter} from './core/filter';

var a = new Filter({
    'key':'1',
    'val':'One',
    'allOn':false,
    'opt':[
        {
            'key':'a',
            'val':'Hey',
            'on':true
        },
        {
            'key':'b',
            'val':'Hi',
            'on':false
        }
    ]
})

console.log(a)

bootstrap(AppComponent);
