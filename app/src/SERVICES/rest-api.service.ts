import { HTTP_PROVIDERS, Http } from 'angular2/http';
import { Injectable, Inject } from 'angular2/core';

@Injectable()
export class RestApiService {
    constructor( private _http: Http) {}
    
    public DoSomething() : boolean {
        window.console.log('Doing Something in RestApiService');
        this._http.get('https://api.themoviedb.org/3/movie/551?api_key=1d24f7e213bcc3fc22382ffbf01e4cb2').subscribe(
            response => 
            window.console.log(response.json())
        )
        return true;
    }
}