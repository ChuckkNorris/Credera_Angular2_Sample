System.register(['angular2/core', '../../SERVICES/services.export', '../../TEMPLATES/templates.export'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, services_export_1, templates_export_1;
    var MovieList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_export_1_1) {
                services_export_1 = services_export_1_1;
            },
            function (templates_export_1_1) {
                templates_export_1 = templates_export_1_1;
            }],
        execute: function() {
            MovieList = (function () {
                function MovieList(_movieDb) {
                    this._movieDb = _movieDb;
                    //private myMovie: Movie;
                    this.myMovies = [];
                    this.nextPage = 1;
                }
                MovieList.prototype.ngOnInit = function () {
                    for (var i = 1; i < 5; i++) {
                        this.getNextPageOfTopMovies();
                    }
                };
                MovieList.prototype.showDetails = function (movie) {
                    console.log('SHOW ME THE DETAILS!');
                    this._movieDb.getFullMovieDetails(movie.id.toString());
                    this.selectedMovie = movie;
                };
                MovieList.prototype.closeDetails = function () {
                    console.log('Close details from movie list');
                    this.selectedMovie = undefined;
                };
                MovieList.prototype.getNextPageOfTopMovies = function () {
                    var _this = this;
                    this._movieDb.getTopMovies(this.nextPage).then(function (movies) {
                        window.console.log('GETTING PAGE: ' + _this.nextPage);
                        movies.forEach(function (movie) {
                            _this.myMovies.push(movie);
                        });
                    });
                    this.nextPage++;
                };
                MovieList.prototype.onScroll = function (event) {
                    var scroll = event.target.scrollingElement;
                    var currentScrollPosition = scroll.clientHeight + scroll.scrollTop;
                    var maxScrollPosition = scroll.scrollHeight;
                    if (currentScrollPosition >= (.9 * maxScrollPosition)) {
                        window.console.log('GETTTING MOVIES: ' + this.nextPage);
                        this.getNextPageOfTopMovies();
                    }
                };
                MovieList = __decorate([
                    core_1.Component({
                        moduleId: 'app/src/PAGES/movie-list/',
                        selector: 'movie-list',
                        providers: [services_export_1.MovieDbService],
                        directives: [templates_export_1.MovieItem, templates_export_1.MovieDetail],
                        templateUrl: 'movie-list.view.html'
                    }), 
                    __metadata('design:paramtypes', [services_export_1.MovieDbService])
                ], MovieList);
                return MovieList;
            })();
            exports_1("MovieList", MovieList);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map