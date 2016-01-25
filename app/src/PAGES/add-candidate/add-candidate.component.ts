import { Component } from 'angular2/core';
import {CANDIDATES} from '../../DATA/data.export';
import {Candidate} from '../../MODELS/candidate.model';
@Component({
    moduleId: 'app/src/pages/add-candidate/',
    selector: 'add-candidate',
    templateUrl: 'add-candidate.view.html',
    styleUrls: ['add-candidate.style.css'],
    inputs: ['myInput']
})
export class AddCandidate {
    public candidateToAdd: Candidate = {};
    
    addCandidate(){
        window.console.log(this.candidateToAdd);
        CANDIDATES.push(this.candidateToAdd);
    }
}