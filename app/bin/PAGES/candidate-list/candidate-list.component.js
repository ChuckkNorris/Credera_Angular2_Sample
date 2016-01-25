System.register(['angular2/core', '../../DATA/data.export', '../../CONTROLS/controls.export'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_export_1, controls_export_1;
    var CandidateList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_export_1_1) {
                data_export_1 = data_export_1_1;
            },
            function (controls_export_1_1) {
                controls_export_1 = controls_export_1_1;
            }],
        execute: function() {
            CandidateList = (function () {
                function CandidateList() {
                    this.candidates = data_export_1.CANDIDATES;
                }
                CandidateList.prototype.ngOnInit = function () {
                    data_export_1.CANDIDATES.push({
                        name: "Dylan T-Dossg",
                        profilePictureUrl: "https://media.licdn.com/media/p/5/005/062/15b/01e9153.jpg",
                        profileUrl: 'https://www.linkedin.com/in/levifuller',
                        description: 'Levi Fuller aka Vanilla Ice is a Tech Consultant at Credera. He likes long walks on the beach',
                        tags: ['.NET', 'Software Engineer', 'Microsoft', 'C#']
                    });
                };
                CandidateList = __decorate([
                    core_1.Component({
                        moduleId: 'app/src/pages/candidate-list/',
                        selector: 'candidate-list',
                        templateUrl: 'candidate-list.view.html',
                        directives: [controls_export_1.CandidateView]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CandidateList);
                return CandidateList;
            })();
            exports_1("CandidateList", CandidateList);
        }
    }
});
//# sourceMappingURL=candidate-list.component.js.map