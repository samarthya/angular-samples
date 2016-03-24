var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$log', function ($scope, $log) {
    'use strict';
    $scope.sampleText = " This is a sample text information using Angular way of life";
    $log.info(" sample log information");
}]);