import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {Movie} from '../../MODELS/models.export';

@Component({
    moduleId: 'app/src/TEMPLATES/movie-detail/',
    selector: 'movie-detail',
    templateUrl: 'movie-detail.view.html',
    styleUrls: ['./movie-detail.style.css'],
    inputs: ['movie'],
    outputs: ['close']
})
export class MovieDetail implements OnInit {
    private movie: Movie;
    
    ngOnInit(){
        
        
    }
    
    close = new EventEmitter();
    
    closeDetails() {
        window.console.log(this.movie);
        window.console.log(this.movie.superRating);
        window.console.log('CLose Details from Detail');
        this.close.emit("event");
    }

}