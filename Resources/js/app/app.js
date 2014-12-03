(function () {
'use strict';

angular
.module(
    'PRIschools', [
    // Dependencies
        'ngRoute',
        'ControllerTable'
    ]
)
.config(function($locationProvider, $routeProvider) {
    var config = {
        root : {
            templateUrl: 'Resources/ng-views/index.html',
            controller: "ControllerTable",
            resolve: {
            }
        },
        redirect : {
            redirectTo : "/"
        }
    };

    $routeProvider
        .when(
            '/',
            config.root
        )
        .when(
            '/dev.html',
            config.root
        )
        .when(
            '/index.html',
            config.root
        )
        .when(
            '/:any*', 
            config.root
        )
        .otherwise(
            config.redirect
        );

    $locationProvider.html5Mode(true);

});

}());
