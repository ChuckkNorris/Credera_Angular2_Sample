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
    var RestApiService, RestRequest;
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
                    // Sent with each request
                    this.globalParameters = {};
                }
                Object.defineProperty(RestApiService.prototype, "baseUrl", {
                    get: function () {
                        return this._baseUrl;
                    },
                    set: function (v) {
                        // remove last '/'
                        if (v.lastIndexOf('/') == v.length - 1)
                            v = v.substr(0, v.length - 1);
                        this._baseUrl = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                RestApiService.prototype.executeRequest = function (request) {
                    var getStatement = this._http.get(this.getFullUrl(request));
                    var promiseToReturn = new Promise(function (resolve) {
                        return getStatement.subscribe((function (response) {
                            resolve(response.json());
                        }));
                    });
                    return promiseToReturn;
                };
                RestApiService.prototype.getFullUrl = function (restRequest) {
                    var toReturn = this.baseUrl;
                    if (restRequest.endPoint != undefined)
                        toReturn += restRequest.endPoint;
                    toReturn += this.getQueryString(restRequest.parameters);
                    return toReturn;
                };
                RestApiService.prototype.getQueryString = function (restRequestParameters) {
                    var toReturn = '?';
                    var isFirst = true;
                    for (var key in this.globalParameters) {
                        if (!isFirst)
                            toReturn += '&';
                        else
                            isFirst = false;
                        toReturn += key + '=' + this.globalParameters[key];
                    }
                    for (var key in restRequestParameters) {
                        if (!isFirst)
                            toReturn += '&';
                        else
                            isFirst = false;
                        toReturn += key + '=' + restRequestParameters[key];
                    }
                    return toReturn;
                };
                RestApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RestApiService);
                return RestApiService;
            })();
            exports_1("RestApiService", RestApiService);
            RestRequest = (function () {
                function RestRequest() {
                    this.parameters = {};
                }
                Object.defineProperty(RestRequest.prototype, "endPoint", {
                    get: function () {
                        return this._endPoint;
                    },
                    set: function (v) {
                        if (v.charAt(0) != '/')
                            v = '/' + v;
                        this._endPoint = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                return RestRequest;
            })();
            exports_1("RestRequest", RestRequest);
        }
    }
});
//# sourceMappingURL=rest-api.service.js.map