import { Component, OnInit } from 'angular2/core';
import { CANDIDATES } from '../../DATA/data.export';
import { CandidateView } from '../../CONTROLS/controls.export';


@Component({
    moduleId: 'app/src/pages/candidate-list/',
    selector: 'candidate-list',
    templateUrl: 'candidate-list.view.html',
    directives: [CandidateView]
})
export class CandidateList implements OnInit {

    constructor() {}
    ngOnInit() {
        CANDIDATES.push({
            name: "Dylan T-Dossg",
            profilePictureUrl: "https://media.licdn.com/media/p/5/005/062/15b/01e9153.jpg",
            profileUrl: 'https://www.linkedin.com/in/levifuller',
            description: 'Levi Fuller aka Vanilla Ice is a Tech Consultant at Credera. He likes long walks on the beach',
            tags: ['.NET', 'Software Engineer', 'Microsoft', 'C#']
        });
    }
    

    private candidates = CANDIDATES;
    
}