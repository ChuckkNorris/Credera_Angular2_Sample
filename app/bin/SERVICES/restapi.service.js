System.register(['angular2/http', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var RestApiService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RestApiService = (function () {
                function RestApiService(_http) {
                    this._http = _http;
                }
                RestApiService.prototype.DoSomething = function () {
                    window.console.log('Doing Something in RestApiService');
                    this._http.get('https://api.themoviedb.org/3/movie/551?api_key=1d24f7e213bcc3fc22382ffbf01e4cb2').subscribe(function (response) {
                        return window.console.log(response.json());
                    });
                    return true;
                };
                RestApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RestApiService);
                return RestApiService;
            })();
            exports_1("RestApiService", RestApiService);
        }
    }
});
//# sourceMappingURL=restapi.service.js.map