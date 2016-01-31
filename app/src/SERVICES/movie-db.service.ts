import {Injectable} from 'angular2/core';
import { RestApiService } from './rest-api.service';

const POSTER_BASE_URL: string = 'http://image.tmdb.org/t/p/w500/';
const MOVIE_DB_API_KEY: string = '1d24f7e213bcc3fc22382ffbf01e4cb2';
const API_KEY: string = 'a1a1a5s5874d84s';

@Injectable()
export class MovieDbService {

    constructor(private _restApi: RestApiService){}
    
}