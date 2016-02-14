import { Component, OnInit } from 'angular2/core';
import { MovieDbService } from '../../SERVICES/services.export';
import { MovieDbResponse, Movie } from '../../MODELS/models.export';
import { MovieItem, MovieDetail } from '../../TEMPLATES/templates.export';

@Component({
    moduleId: 'app/src/PAGES/movie-list/',
    selector: 'movie-list',
    providers: [MovieDbService],
    directives: [MovieItem, MovieDetail],
   templateUrl: 'movie-list.view.html'
})
export class MovieList implements OnInit {
    constructor(private _movieDb: MovieDbService){}
    
    //private myMovie: Movie;
    private myMovies: Movie[] = [];
    
    ngOnInit(){
        for (var i = 1; i < 5; i++){
            this.getNextPageOfTopMovies();
        }
    }
    
    private selectedMovie:Movie;
    showDetails(mdbMovie: Movie){
         this._movieDb.getFullMovieDetails(mdbMovie).then(movie => {
            this.selectedMovie = movie;
            console.log(movie);
        });
        
    }
    
    closeDetails(){
        this.selectedMovie = undefined;
    }
   
    
    private nextPage:number = 1;
    getNextPageOfTopMovies(){
        this._movieDb.getTopMovies(this.nextPage).then(movies => {
                movies.forEach(movie => {
                    this._movieDb.getFullMovieDetails(movie).then(fullMovie => 
                        this.myMovies.push(fullMovie)
                    );
                })
        });
        this.nextPage++;
    }
    
    onScroll(event) {
        var scroll = event.target.scrollingElement;
        var currentScrollPosition: number = scroll.clientHeight + scroll.scrollTop;
        var maxScrollPosition: number = scroll.scrollHeight;
        if (currentScrollPosition >= (.9 * maxScrollPosition)) {
            this.getNextPageOfTopMovies();
        }
    }
}