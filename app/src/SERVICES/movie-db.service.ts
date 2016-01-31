import {Injectable} from 'angular2/core';
import {Promise} from 'angular2/src/facade/promise';
import { RestApiService, RestRequest } from './rest-api.service';
import { MovieDbResponse } from '../MODELS/models.export';
const POSTER_BASE_URL: string = 'http://image.tmdb.org/t/p/w500/';
const MOVIE_DB_API_KEY: string = '1d24f7e213bcc3fc22382ffbf01e4cb2';
const MOVIE_DB_BASE_URL: string = 'https://api.themoviedb.org/3';

@Injectable()
export class MovieDbService {

    constructor(private _movieDbRest: RestApiService){this.onInit();}
    
    onInit() {
        this._movieDbRest.globalParameters['api_key'] = MOVIE_DB_API_KEY;
        this._movieDbRest.baseUrl = MOVIE_DB_BASE_URL;
    }
    
    // - GET MOVIE - //
    public getMovie(): Promise<MovieDbResponse> {
        var movieRequest = new RestRequest();
        movieRequest.endPoint = '/find/tt1431045';
        movieRequest.parameters['external_source'] = 'imdb_id';
       
        var promiseToReturn = new Promise<MovieDbResponse>(resolve => 
            this._movieDbRest.executeRequest(movieRequest).then(movie => {
                resolve(movie);
                
            }
        ));
        return promiseToReturn;
    }
}