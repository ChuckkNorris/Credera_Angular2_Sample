System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MovieDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieDetail = (function () {
                function MovieDetail() {
                    this.close = new core_1.EventEmitter();
                }
                MovieDetail.prototype.ngOnInit = function () {
                    window.console.log('INITAILIZED Movie Detail');
                };
                MovieDetail.prototype.closeDetails = function () {
                    window.console.log('CLose Details from Detail');
                    this.close.emit("event");
                };
                MovieDetail = __decorate([
                    core_1.Component({
                        moduleId: 'app/src/TEMPLATES/movie-detail/',
                        selector: 'movie-detail',
                        templateUrl: 'movie-detail.view.html',
                        styleUrls: ['./movie-detail.style.css'],
                        inputs: ['movie'],
                        outputs: ['close']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieDetail);
                return MovieDetail;
            })();
            exports_1("MovieDetail", MovieDetail);
        }
    }
});
//# sourceMappingURL=movie-detail.component.js.map