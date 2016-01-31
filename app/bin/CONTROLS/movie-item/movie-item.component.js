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
    var MovieItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieItem = (function () {
                function MovieItem() {
                }
                MovieItem = __decorate([
                    core_1.Component({
                        moduleId: 'app/src/CONTROLS/movie-item/',
                        selector: 'movie-item',
                        templateUrl: 'movie-item.view.html',
                        styleUrls: ['./movie-item.style.css'],
                        inputs: ['movie']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieItem);
                return MovieItem;
            })();
            exports_1("MovieItem", MovieItem);
        }
    }
});
//# sourceMappingURL=movie-item.component.js.map