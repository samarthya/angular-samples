var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
    'use strict';
    $scope.sampleText = " This is a sample text information using Angular way of life";
}]);