import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MovieList, MovieDetail } from './PAGES/Pages.export';


@Component({
    moduleId: 'app/src/',
    selector: 'my-app',
    templateUrl: 'app.view.html',
    styleUrls: ['./app.style.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

    {
        path: '/MovieList',
        name: 'MovieList',
        useAsDefault: true,
        component: MovieList
    },
    {
        path: '/MovieDetail',
        name: 'MovieDetail',
        component: MovieDetail
    },
 
])
export class AppComponent {
    private currPage:CurrentPage = CurrentPage.First;
    setActive(currPageToSet: boolean){
        // this.currPage = currPageToSet;
    }
    
    getPageHtml(){
        var data = document.getElementById("linkedInFrame").html();
        console.log(data);
        var url = 'write.php';
    }
}

enum CurrentPage{
    First = 1,
    Second = 2
}