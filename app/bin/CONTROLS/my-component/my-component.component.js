System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var MyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MyComponent = (function () {
                function MyComponent(http) {
                    this.http = http;
                }
                MyComponent.prototype.sendRequest = function () {
                    // window.console.log('Hello from send message!');
                    // this.http.get('http://www.omdbapi.com?t=batman&r=JSON').subscribe( response => {
                    //     window.console.log(response);
                    //     this.response = <Movie>response.json();
                    // });
                };
                MyComponent = __decorate([
                    core_1.Component({
                        moduleId: 'app/src/my-component/',
                        selector: 'my-component',
                        templateUrl: 'my-component.view.html',
                        styleUrls: ['my-component.style.css'],
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS],
                        inputs: ['myInput']
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MyComponent);
                return MyComponent;
            })();
            exports_1("MyComponent", MyComponent);
        }
    }
});
//# sourceMappingURL=my-component.component.js.map