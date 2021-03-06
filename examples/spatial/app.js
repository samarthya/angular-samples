var myApp = angular.module('spatial', ['ngRoute', 'ngMessages', 'myHeader', 'spatialServices']);

myApp.controller('spatialController', ['$scope', '$log', 'tokenService', function ($scope, $log, tokenService) {
    $scope.user = {};
    $scope.user.name = '';
    $scope.user.password = '';
    $scope.serverUrl = 'http://54.148.50.104:8080';

    $log.info("User" + $scope.user);
    //tokenService.callGoogle();
    //tokenService.getToken('myName', 'myPassword', 'someInformation');
    //tokenService.getTokenwithHTTP('admin', 'admin');
}]);

myApp.directive('globalCredentials', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/_credentials.html',
        replace: true
    }
});

myApp.directive('globalAdaptiveCredentials', function () {
    var adaptiveCredentials = {
        restrict: 'E',
        templateUrl: 'directives/_adaptive-credentials.html',
        replace: true,
        controller: 'adaptiveController',
        compile: function (element, attrs) {
            return {
                post: function (scope, element, attrs) {
                    console.log(scope);
                    console.log(element);                    
                }
            }
        }
    };
    return adaptiveCredentials;
});