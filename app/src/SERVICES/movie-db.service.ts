import {Injectable} from 'angular2/core';
import { RestApiService, RestRequest } from './rest-api.service';
import { OmdbService } from './omdb.service';
import { MovieDbResponse, MovieResponse, MovieResult, Movie, OmdbMovie } from '../MODELS/models.export';
const POSTER_BASE_URL: string = 'http://image.tmdb.org/t/p/w500';
const MOVIE_DB_API_KEY: string = '1d24f7e213bcc3fc22382ffbf01e4cb2';
const MOVIE_DB_BASE_URL: string = 'https://api.themoviedb.org/3';

const OMDB_BASE_URL: string = 'http://www.omdbapi.com';

@Injectable()
export class MovieDbService {

    constructor(
        private _movieDbRest: RestApiService,
        private _omdbService: OmdbService
    ){this.onInit();}
    
    onInit() {
        this._movieDbRest.globalParameters['api_key'] = MOVIE_DB_API_KEY;
        this._movieDbRest.baseUrl = MOVIE_DB_BASE_URL;
    }
    
    
    // - GET MOVIE - //
    public getFullMovieDetails(mdbMovie: Movie) : Promise<Movie> {
        var promiseToReturn = new Promise<Movie>(resolve => {
            this._omdbService.getFullMovieDetails(mdbMovie).then(toReturn => {
                resolve(toReturn);
            });
        });
        return promiseToReturn;
    }
    
    // - TOP MOVIES - //
    public getTopMovies(pageCount: number): Promise<Movie[]> {
        this._movieDbRest.globalParameters['api_key'] = MOVIE_DB_API_KEY;
        this._movieDbRest.baseUrl = MOVIE_DB_BASE_URL;
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
    
    convertToMovie(movie: MovieResponse) : Movie{
        var toReturn: Movie = {
            id: movie.id,
            imdb_id: movie.imdb_id,
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