import {Injectable} from 'angular2/core';
import { RestApiService, RestRequest } from './rest-api.service';
import { MovieDbResponse, MovieResponse, MovieResult, Movie } from '../MODELS/models.export';
const POSTER_BASE_URL: string = 'http://image.tmdb.org/t/p/w500';
const MOVIE_DB_API_KEY: string = '1d24f7e213bcc3fc22382ffbf01e4cb2';
const MOVIE_DB_BASE_URL: string = 'https://api.themoviedb.org/3';

@Injectable()
export class MovieDbService {

    constructor(private _movieDbRest: RestApiService){this.onInit();}
    
    onInit() {
        this._movieDbRest.globalParameters['api_key'] = MOVIE_DB_API_KEY;
        this._movieDbRest.baseUrl = MOVIE_DB_BASE_URL;
    }
    
    // - TOP MOVIES - //
    public getTopMovies(pageCount: number): Promise<Movie[]> {
        var request = new RestRequest();
        request.endPoint = '/movie/top_rated';
        request.parameters['page'] = pageCount.toString();
        
         var promiseToReturn = new Promise<Movie[]>(resolve => 
            this._movieDbRest.executeRequest<MovieResult>(request).then(movieResult => {
                var toReturn: Movie[] = [];
                movieResult.results.forEach(movie => {
                    toReturn.push(this.convertToMovie(movie));
                });
                resolve(toReturn);
            }
        ));
        return promiseToReturn;
    }
    
    // - GET MOVIE - //
    public getMovie(): Promise<Movie> {
        var movieRequest = new RestRequest();
        movieRequest.endPoint = '/find/tt1431045';
        movieRequest.parameters['external_source'] = 'imdb_id';
       
        var promiseToReturn = new Promise<Movie>(resolve => 
            this._movieDbRest.executeRequest<MovieDbResponse>(movieRequest).then(movie => {
                var currMovie = movie.movie_results[0];
                var toReturn: Movie = this.convertToMovie(currMovie);
                resolve(toReturn);
            }
        ));
        return promiseToReturn;
    }
    
    
    convertToMovie(movie: MovieResponse) : Movie{
        var toReturn: Movie = {
            title: movie.title,
            backdropUrl: POSTER_BASE_URL + movie.backdrop_path,
            posterUrl: POSTER_BASE_URL + movie.poster_path,
            overview: movie.overview,
            popularity: movie.popularity,
            releaseDate: movie.release_date,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count
        };
        return toReturn;
    }
}