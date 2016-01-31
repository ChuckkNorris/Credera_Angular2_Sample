System.register(['./rest-api.service', './movie-db.service'], function(exports_1) {
    return {
        setters:[
            function (rest_api_service_1_1) {
                exports_1({
                    "RestApiService": rest_api_service_1_1["RestApiService"],
                    "RestRequest": rest_api_service_1_1["RestRequest"]
                });
            },
            function (movie_db_service_1_1) {
                exports_1({
                    "MovieDbService": movie_db_service_1_1["MovieDbService"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=services.export.js.map