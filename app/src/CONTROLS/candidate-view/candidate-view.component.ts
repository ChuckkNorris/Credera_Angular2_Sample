import {Component} from 'angular2/core';
import {Candidate} from '../../MODELS/models.export';

@Component({
    moduleId: 'app/src/CONTROLS/candidate-view/',
    selector: 'candidate-view',
    templateUrl: 'candidate-view.view.html',
    inputs: ['candidate']
})
export class CandidateView {
    private candidate: Candidate;
}