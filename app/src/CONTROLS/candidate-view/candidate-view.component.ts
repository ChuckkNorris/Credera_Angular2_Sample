import {Component} from 'angular2/core';
import {Candidate} from '../../MODELS/models.export';

@Component({
    moduleId: 'app/src/CONTROLS/candidate-view/',
    selector: 'candidate-view',
    templateUrl: 'candidate-view.view.html',
    styleUrls: ['./candidate-view.style.css'],
    inputs: ['candidate']
})
export class CandidateView {
    private candidate: Candidate;
}