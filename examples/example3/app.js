var myApp = angular.module('example3', ['ngRoute']);

<!-- ngRoute module provides routing and deeplinking services and directives for angular apps-->
    
myApp.config(function($routeProvider) {
    
    $routeProvider.when('/', {
       templateUrl: 'templates/main.html',
        controller: 'example3'
    });       
   
});

myApp.service('serviceDummy', function($log) {
    this.self = this;
    
    this.serviceName = "DummyService";    
    this.getName = function() {
        $log.info(" Service called!" );
        return self.serviceName;
    }
});

myApp.controller('example3', ['$scope', '$log', '$timeout', '$location', 'serviceDummy', function ($scope, $log, $timeout, $location, serviceDummy) {
    'use strict';  
    $scope.exampleID = " Example 2! ";
    
    $log.info($scope.exampleID);
    $log.info($location.path());
    
    $scope.ServiceName = serviceDummy.getName.toString();   
    $log.debug(serviceDummy.getName);
    $log.warn(serviceDummy.getName());
    
}]);

