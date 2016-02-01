import {Component} from 'angular2/core';
import {Movie} from '../../MODELS/models.export';

@Component({
    moduleId: 'app/src/TEMPLATES/movie-item/',
    selector: 'movie-item',
    templateUrl: 'movie-item.view.html',
    styleUrls: ['./movie-item.style.css'],
    inputs: ['movie']
})
export class MovieItem {
    private movie: Movie;
    

}