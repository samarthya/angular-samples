var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('myController', ['$scope', '$log', '$timeout', function ($scope, $log, $timeout) {
    'use strict';
    
    $scope.sampleText = " This is a sample text information using Angular way of life";
    
    $log.info(" sample log information");
    
    /**
     * Angular service of timeout.
     * Angular's wrapper for window.setTimeout
     */
    $timeout(function () { 
        $log.warn(" Timeout called!");
        $scope.sampleText = "Timeout text appears";
    }, 3000);
    
    setTimeout(function () {
        console.warn("Indepedent timer outside Angular context called ");
        $scope.sampleText = "Outside angular context - so wont appear!";
        $scope.$apply(function () {
            $scope.sampleText = "Instigating a digest cycle.";
        });
    }, 4000);
    
}]);