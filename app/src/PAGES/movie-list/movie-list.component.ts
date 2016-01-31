import { Component, OnInit } from 'angular2/core';
import { MovieDbService } from '../../SERVICES/services.export';
import { MovieDbResponse, Movie } from '../../MODELS/models.export';
import { MovieItem } from '../../TEMPLATES/templates.export';

@Component({
    moduleId: 'app/src/PAGES/movie-list/',
    selector: 'movie-list',
    providers: [MovieDbService],
    directives: [MovieItem],
   templateUrl: 'movie-list.view.html'
})
export class MovieList implements OnInit {
    constructor(private _movieDb: MovieDbService){}
    
    //private myMovie: Movie;
    private myMovies: Movie[] = [];
    
    ngOnInit(){
        window.console.log('MovieList');
        // this._movieDb.getMovie().then(movie => {
        //     this.myMovie = movie;
        //     window.console.log(movie.title);
        //     window.console.log(movie.backdropUrl);
        // });
        for (var i = 1; i < 10; i++){
            this._movieDb.getTopMovies(i).then(movies => {
            movies.forEach(movie => {
                this.myMovies.push(movie);
                window.console.log(movie); 
            })
        });
        }
        
    }
}