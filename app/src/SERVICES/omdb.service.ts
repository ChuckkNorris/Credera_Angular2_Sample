import {Injectable} from 'angular2/core';
import { RestApiService, RestRequest } from './rest-api.service';
import { MovieDbResponse, MovieResponse, MovieResult, Movie, OmdbMovie } from '../MODELS/models.export';

const OMDB_BASE_URL: string = 'http://www.omdbapi.com';

@Injectable()
export class OmdbService {

    constructor(private _omdbRest: RestApiService){this.onInit();}
    
    onInit() {
        this._omdbRest.baseUrl = OMDB_BASE_URL;
        this._omdbRest.globalParameters['r'] = 'JSON';
    }
    
    // - GET MOVIE - //
    public getFullMovieDetails(movieDbMovie: Movie) : Promise<Movie> {
        var movieDbRequest = new RestRequest();
        movieDbRequest.endPoint = '/movie/' + movieDbMovie.id;
        var promiseToReturn = new Promise<Movie>(resolve => {

                var omdbRequest = new RestRequest();
                omdbRequest.parameters['i'] = movieDbMovie.imdb_id;
                omdbRequest.parameters['tomatoes'] = 'true';
                this._omdbRest.executeRequest<OmdbMovie>(omdbRequest).then(omdbMovie => {
                    window.console.log('MOVIEDB: '+ omdbMovie);
                    movieDbMovie.imdbRating = omdbMovie.imdbRating;
                    movieDbMovie.metaRating = omdbMovie.Metascore;
                    movieDbMovie.tomatoRating = omdbMovie.tomatoRating;
                    movieDbMovie.tomatoUserRating = omdbMovie.tomatoUserRating;
                    resolve(movieDbMovie);
                });
        });
        return promiseToReturn;
    }
    
}