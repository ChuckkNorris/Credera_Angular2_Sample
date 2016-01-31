import { Component, OnInit } from 'angular2/core';
import { MovieDbService } from '../../SERVICES/services.export';
import { MovieDbResponse } from '../../MODELS/models.export';
import {Promise} from 'angular2/src/facade/promise';
@Component({
    moduleId: 'app/src/PAGES/movie-list/',
    selector: 'movie-list',
    providers: [MovieDbService],
   templateUrl: 'movie-list.view.html'
})
export class MovieList implements OnInit {
    constructor(private _movieDb: MovieDbService){}
    ngOnInit(){
        window.console.log('MovieList');
        this._movieDb.getMovie().then(movie => {
            window.console.log(movie);
            
            window.console.log(movie.movie_results[0].title);
        });
    }
}