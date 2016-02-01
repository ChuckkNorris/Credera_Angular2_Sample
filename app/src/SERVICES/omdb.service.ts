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
        this._omdbRest.baseUrl = OMDB_BASE_URL;
        this._omdbRest.globalParameters['r'] = 'JSON';
        var movieDbRequest = new RestRequest();
        movieDbRequest.endPoint = '/movie/' + movieDbMovie.id;
        var promiseToReturn = new Promise<Movie>(resolve => {

                var omdbRequest = new RestRequest();
                omdbRequest.parameters['i'] = movieDbMovie.imdb_id;
                omdbRequest.parameters['tomatoes'] = 'true';
                this._omdbRest.executeRequest<OmdbMovie>(omdbRequest).then(omdbMovie => {
                    window.console.log('MOVIEDB: '+ omdbMovie);
                    
                    var imdbRating = +omdbMovie.imdbRating;
                    var metaRating = +omdbMovie.Metascore / 10;
                    var tomatoCriticRating =  +omdbMovie.tomatoMeter / 10;
                    var tomatoUserRating = +omdbMovie.tomatoUserMeter / 10;
                    var superRating = this.getSuperRating([imdbRating, metaRating, tomatoUserRating]);
                    
                    window.console.log('IMDB'+imdbRating);
                    window.console.log('IMDB'+imdbRating);
                    movieDbMovie.imdbRating = imdbRating;
                    movieDbMovie.metaRating = metaRating;
                    movieDbMovie.tomatoCriticRating = tomatoCriticRating;
                    movieDbMovie.tomatoUserRating = tomatoUserRating;
                    movieDbMovie.year = +omdbMovie.Year;
                    movieDbMovie.genre = omdbMovie.Genre.split(',');
                    movieDbMovie.superRating = superRating;
                   window.console.log('SUPER!!!! '+movieDbMovie.superRating);
                    resolve(movieDbMovie);
                });
        });
        return promiseToReturn;
    }
    
    private getSuperRating(ratings: number[]): number {
        var toReturn: number = 0;
        var ratingsAddedToCollection = 0;
        ratings.forEach(rating => {
            if (rating != null) {
                toReturn += rating;
                ratingsAddedToCollection++;
            }
        });
        if (ratingsAddedToCollection == 0)
            return undefined;
        return +(toReturn / ratingsAddedToCollection).toFixed(2);
    }
    
}