System.register(['angular2/core', 'angular2/src/facade/promise', './rest-api.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, promise_1, rest_api_service_1;
    var POSTER_BASE_URL, MOVIE_DB_API_KEY, MOVIE_DB_BASE_URL, MovieDbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (promise_1_1) {
                promise_1 = promise_1_1;
            },
            function (rest_api_service_1_1) {
                rest_api_service_1 = rest_api_service_1_1;
            }],
        execute: function() {
            POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';
            MOVIE_DB_API_KEY = '1d24f7e213bcc3fc22382ffbf01e4cb2';
            MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';
            MovieDbService = (function () {
                function MovieDbService(_movieDbRest) {
                    this._movieDbRest = _movieDbRest;
                    this.onInit();
                }
                MovieDbService.prototype.onInit = function () {
                    this._movieDbRest.globalParameters['api_key'] = MOVIE_DB_API_KEY;
                    this._movieDbRest.baseUrl = MOVIE_DB_BASE_URL;
                };
                // - GET MOVIE - //
                MovieDbService.prototype.getMovie = function () {
                    var _this = this;
                    var movieRequest = new rest_api_service_1.RestRequest();
                    movieRequest.endPoint = '/find/tt1431045';
                    movieRequest.parameters['external_source'] = 'imdb_id';
                    var promiseToReturn = new promise_1.Promise(function (resolve) {
                        return _this._movieDbRest.executeRequest(movieRequest).then(function (movie) {
                            resolve(movie);
                        });
                    });
                    return '';
                    return promiseToReturn;
                };
                MovieDbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [rest_api_service_1.RestApiService])
                ], MovieDbService);
                return MovieDbService;
            })();
            exports_1("MovieDbService", MovieDbService);
        }
    }
});
//# sourceMappingURL=movie-db.service.js.map