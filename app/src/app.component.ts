import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AddCandidate, CandidateDetail, CandidateList } from 'pages';


@Component({
    moduleId: 'app/src/',
    selector: 'my-app',
    templateUrl: 'app.view.html',
    styleUrls: ['./app.style.css'],
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
    private currPage:CurrentPage = CurrentPage.First;
    setActive(currPageToSet: boolean){
        // this.currPage = currPageToSet;
        // window.console.log('Set active hit');
       // window.console.log(currPageToSet);
        // window.console.log(this.currPage);
    }
}

enum CurrentPage{
    First = 1,
    Second = 2
}