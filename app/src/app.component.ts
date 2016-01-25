import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AddCandidate, CandidateDetail, CandidateList } from './PAGES/pages.export';


@Component({
    moduleId: 'app/src/',
    selector: 'my-app',
    templateUrl: 'app.view.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/CandidateList',
        name: 'CandidateList',
        useAsDefault: true,
        component: CandidateList
    },
        {
        path: '/AddCandidate',
        name: 'AddCandidate',
        component: AddCandidate
    }
  
    
])
export class AppComponent {

}