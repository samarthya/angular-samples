var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('myController', ['$scope', '$log', '$timeout', '$location', function ($scope, $log, $timeout, $location) {
    'use strict';
    
    $scope.sampleText = " This is a sample text information using Angular way of life";
    
    $log.info(" sample log information");
    $log.info($location.path());
    
    
}]);