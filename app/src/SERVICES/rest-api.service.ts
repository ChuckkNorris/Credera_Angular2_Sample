import { HTTP_PROVIDERS, Http } from 'angular2/http';
import { Injectable, Inject } from 'angular2/core';

@Injectable()
export class RestApiService {
    constructor( private _http: Http) {}
    // Sent with each request
    public globalParameters: {[name: string]: string} = {};
   // public baseUrl: string;
    
    private _baseUrl : string;
    public get baseUrl() : string {
        return this._baseUrl;
    }
    public set baseUrl(v : string) {
        // remove last '/'
        if (v.lastIndexOf('/') == v.length - 1)
            v = v.substr(0, v.length - 1);
        this._baseUrl = v;
        window.console.log(this._baseUrl);
    }
    
    
    public executeRequest<T>(request: RestRequest) : Promise<T> {
        var getStatement = this._http.get(this.getFullUrl(request));
        var promiseToReturn = new Promise<T>(resolve => 
            getStatement.subscribe((response => {
                window.console.log(response.json());
                resolve(<T>response.json());
            })));
        return promiseToReturn;
    }
    
    getFullUrl(restRequest: RestRequest){
        var toReturn = this.baseUrl;
        
        if (restRequest.endPoint != undefined)
            toReturn += restRequest.endPoint
        toReturn += this.getQueryString(restRequest.parameters);
      
        window.console.log('REST URL: ' + toReturn);
        return toReturn;
    }
    
    getQueryString(restRequestParameters): string {
        var toReturn = '?';
        var isFirst = true;
        for (var key in this.globalParameters){
            if (!isFirst)
                toReturn += '&';
            else isFirst = false;
            toReturn += key + '=' + this.globalParameters[key]
        }
        
        for (var key in restRequestParameters){
            if (!isFirst)
                toReturn += '&';
            else isFirst = false;
            toReturn += key + '=' + restRequestParameters[key]
        }
        
        return toReturn;
    }
}

export class RestRequest{
     public parameters: {[name: string]: string} = {};
   //  public endPoint: string;
     
     private _endPoint : string;
     public get endPoint() : string {
         return this._endPoint;
     }
     public set endPoint(v : string) {
         if (v.charAt(0) != '/')
            v = '/' + v;
         this._endPoint = v;
         window.console.log('ENDPOINT: ' + this._endPoint);
     }
     
}