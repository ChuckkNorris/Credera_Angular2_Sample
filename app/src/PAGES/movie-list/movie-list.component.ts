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
    showDetails(movie: Movie){
        console.log('SHOW ME THE DETAILS!');
        this.selectedMovie = movie;
    }
    
    closeDetails(){
        console.log('Close details from movie list');
        this.selectedMovie = undefined;
    }
   
    
    private nextPage:number = 1;
    getNextPageOfTopMovies(){
        this._movieDb.getTopMovies(this.nextPage).then(movies => {
            window.console.log('GETTING PAGE: ' + this.nextPage);
                movies.forEach(movie => {
                    this.myMovies.push(movie);
                })
        });
        this.nextPage++;
    }
    
    onScroll(event) {
        var scroll = event.target.scrollingElement;
        var currentScrollPosition: number = scroll.clientHeight + scroll.scrollTop;
        var maxScrollPosition: number = scroll.scrollHeight;
        if (currentScrollPosition >= (.9 * maxScrollPosition)) {
            window.console.log('GETTTING MOVIES: ' + this.nextPage);
            this.getNextPageOfTopMovies();
        }
    }
}