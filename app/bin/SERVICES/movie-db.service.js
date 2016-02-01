System.register(['angular2/core', './rest-api.service', './omdb.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rest_api_service_1, omdb_service_1;
    var POSTER_BASE_URL, MOVIE_DB_API_KEY, MOVIE_DB_BASE_URL, OMDB_BASE_URL, MovieDbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rest_api_service_1_1) {
                rest_api_service_1 = rest_api_service_1_1;
            },
            function (omdb_service_1_1) {
                omdb_service_1 = omdb_service_1_1;
            }],
        execute: function() {
            POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500';
            MOVIE_DB_API_KEY = '1d24f7e213bcc3fc22382ffbf01e4cb2';
            MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';
            OMDB_BASE_URL = 'http://www.omdbapi.com';
            MovieDbService = (function () {
                function MovieDbService(_movieDbRest, _omdbService) {
                    this._movieDbRest = _movieDbRest;
                    this._omdbService = _omdbService;
                    this.onInit();
                }
                MovieDbService.prototype.onInit = function () {
                    this._movieDbRest.globalParameters['api_key'] = MOVIE_DB_API_KEY;
                    this._movieDbRest.baseUrl = MOVIE_DB_BASE_URL;
                };
                // - GET MOVIE - //
                MovieDbService.prototype.getFullMovieDetails = function (id) {
                    var _this = this;
                    this._movieDbRest.baseUrl = MOVIE_DB_BASE_URL;
                    var movieDbRequest = new rest_api_service_1.RestRequest();
                    movieDbRequest.endPoint = '/movie/' + id;
                    var promiseToReturn = new Promise(function (resolve) {
                        return _this._movieDbRest.executeRequest(movieDbRequest).then(function (movieResponse) {
                            window.console.log('MOVIEDB: ' + movieResponse);
                            var movieDbMovie = _this.convertToMovie(movieResponse);
                            _this._omdbService.getFullMovieDetails(movieDbMovie).then(function (toReturn) {
                                console.log(toReturn);
                                resolve(toReturn);
                            });
                        });
                    });
                    return promiseToReturn;
                };
                // - TOP MOVIES - //
                MovieDbService.prototype.getTopMovies = function (pageCount) {
                    var _this = this;
                    this._movieDbRest.globalParameters['api_key'] = MOVIE_DB_API_KEY;
                    this._movieDbRest.baseUrl = MOVIE_DB_BASE_URL;
                    var request = new rest_api_service_1.RestRequest();
                    request.endPoint = '/movie/top_rated';
                    request.parameters['page'] = pageCount.toString();
                    var promiseToReturn = new Promise(function (resolve) {
                        return _this._movieDbRest.executeRequest(request).then(function (movieResult) {
                            var toReturn = [];
                            movieResult.results.forEach(function (movie) {
                                toReturn.push(_this.convertToMovie(movie));
                            });
                            resolve(toReturn);
                        });
                    });
                    return promiseToReturn;
                };
                MovieDbService.prototype.convertToMovie = function (movie) {
                    var toReturn = {
                        id: movie.id,
                        imdb_id: movie.imdb_id,
                        title: movie.title,
                        backdropUrl: POSTER_BASE_URL + movie.backdrop_path,
                        posterUrl: POSTER_BASE_URL + movie.poster_path,
                        overview: movie.overview,
                        popularity: movie.popularity,
                        releaseDate: movie.release_date,
                        voteAverage: movie.vote_average,
                        voteCount: movie.vote_count
                    };
                    return toReturn;
                };
                MovieDbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [rest_api_service_1.RestApiService, omdb_service_1.OmdbService])
                ], MovieDbService);
                return MovieDbService;
            })();
            exports_1("MovieDbService", MovieDbService);
        }
    }
});
//# sourceMappingURL=movie-db.service.js.map