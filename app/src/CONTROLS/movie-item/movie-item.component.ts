import {Component} from 'angular2/core';
import {Candidate} from '../../MODELS/models.export';

@Component({
    moduleId: 'app/src/CONTROLS/movie-item/',
    selector: 'movie-item',
    templateUrl: 'movie-item.view.html',
    styleUrls: ['./movie-item.style.css'],
    inputs: ['movie']
})
export class MovieItem {
    private candidate: Candidate;
}