var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

<!-- ngRoute module provides routing and deeplinking services and directives for angular apps-->
myApp.config(function($routeProvider) {
    
    $routeProvider.when('/', {
       templateUrl: 'templates/main.html',
        controller: 'example2'
    });
    
    $routeProvider.when('/first', {
       templateUrl: 'templates/first.html',
        controller: 'example2'
    });
    
    $routeProvider.when('/second', {
       templateUrl: 'templates/second.html',
        controller: 'example2.secondController'
    });
})

myApp.controller('example2', ['$scope', '$log', '$timeout', '$location', function ($scope, $log, $timeout, $location) {
    'use strict';  
        
    $log.info(" Example 2! ");
    $log.info($location.path());
    
    $scope.identifier = "Main";
}]);

myApp.controller('example2.secondController', ['$scope', '$log', '$timeout', '$location', function ($scope, $log, $timeout, $location) {
    'use strict';
    $log.info($location.path());    
    $scope.identifier = "Second";
    
}]);