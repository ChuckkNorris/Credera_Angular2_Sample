System.register(['angular2/core', './rest-api.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rest_api_service_1;
    var OMDB_BASE_URL, OmdbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rest_api_service_1_1) {
                rest_api_service_1 = rest_api_service_1_1;
            }],
        execute: function() {
            OMDB_BASE_URL = 'http://www.omdbapi.com';
            OmdbService = (function () {
                function OmdbService(_omdbRest) {
                    this._omdbRest = _omdbRest;
                    this.onInit();
                }
                OmdbService.prototype.onInit = function () {
                    this._omdbRest.baseUrl = OMDB_BASE_URL;
                    this._omdbRest.globalParameters['r'] = 'JSON';
                };
                // - GET MOVIE - //
                OmdbService.prototype.getFullMovieDetails = function (movieDbMovie) {
                    var _this = this;
                    this._omdbRest.baseUrl = OMDB_BASE_URL;
                    this._omdbRest.globalParameters['r'] = 'JSON';
                    var movieDbRequest = new rest_api_service_1.RestRequest();
                    movieDbRequest.endPoint = '/movie/' + movieDbMovie.id;
                    var promiseToReturn = new Promise(function (resolve) {
                        var omdbRequest = new rest_api_service_1.RestRequest();
                        omdbRequest.parameters['i'] = movieDbMovie.imdb_id;
                        omdbRequest.parameters['tomatoes'] = 'true';
                        _this._omdbRest.executeRequest(omdbRequest).then(function (omdbMovie) {
                            window.console.log('MOVIEDB: ' + omdbMovie);
                            var imdbRating = +omdbMovie.imdbRating;
                            var metaRating = +omdbMovie.Metascore / 10;
                            var tomatoCriticRating = +omdbMovie.tomatoMeter / 10;
                            var tomatoUserRating = +omdbMovie.tomatoUserMeter / 10;
                            var superRating = _this.getSuperRating([imdbRating, metaRating, tomatoUserRating]);
                            window.console.log('IMDB' + imdbRating);
                            window.console.log('IMDB' + imdbRating);
                            movieDbMovie.imdbRating = imdbRating;
                            movieDbMovie.metaRating = metaRating;
                            movieDbMovie.tomatoCriticRating = tomatoCriticRating;
                            movieDbMovie.tomatoUserRating = tomatoUserRating;
                            movieDbMovie.year = +omdbMovie.Year;
                            movieDbMovie.genre = omdbMovie.Genre.split(',');
                            movieDbMovie.superRating = superRating;
                            window.console.log('SUPER!!!! ' + movieDbMovie.superRating);
                            resolve(movieDbMovie);
                        });
                    });
                    return promiseToReturn;
                };
                OmdbService.prototype.getSuperRating = function (ratings) {
                    var toReturn = 0;
                    var ratingsAddedToCollection = 0;
                    ratings.forEach(function (rating) {
                        if (rating != null) {
                            toReturn += rating;
                            ratingsAddedToCollection++;
                        }
                    });
                    if (ratingsAddedToCollection == 0)
                        return undefined;
                    return +(toReturn / ratingsAddedToCollection).toFixed(2);
                };
                OmdbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [rest_api_service_1.RestApiService])
                ], OmdbService);
                return OmdbService;
            })();
            exports_1("OmdbService", OmdbService);
        }
    }
});
//# sourceMappingURL=omdb.service.js.map