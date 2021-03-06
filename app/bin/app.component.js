System.register(['angular2/core', 'angular2/router', './PAGES/Pages.export'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Pages_export_1;
    var AppComponent, CurrentPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Pages_export_1_1) {
                Pages_export_1 = Pages_export_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.currPage = CurrentPage.First;
                }
                AppComponent.prototype.setActive = function (currPageToSet) {
                    // this.currPage = currPageToSet;
                };
                AppComponent.prototype.getPageHtml = function () {
                    var data = document.getElementById("linkedInFrame").html();
                    console.log(data);
                    var url = 'write.php';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: 'app/src/',
                        selector: 'my-app',
                        templateUrl: 'app.view.html',
                        styleUrls: ['./app.style.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/MovieList',
                            name: 'MovieList',
                            useAsDefault: true,
                            component: Pages_export_1.MovieList
                        },
                        {
                            path: '/MovieDetail',
                            name: 'MovieDetail',
                            component: Pages_export_1.MovieDetail
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            (function (CurrentPage) {
                CurrentPage[CurrentPage["First"] = 1] = "First";
                CurrentPage[CurrentPage["Second"] = 2] = "Second";
            })(CurrentPage || (CurrentPage = {}));
        }
    }
});
//# sourceMappingURL=app.component.js.map