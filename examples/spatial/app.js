var myApp = angular.module('spatial', ['ngRoute','ngMessages']);

myApp.controller('spatialController', ['$scope', '$log', function($scope, $log){
    $scope.user = {};
    $scope.user.name = '';
    $scope.user.password = '';
    
    $log.info("User" + $scope.user);
}]);

myApp.directive('globalCredentials', function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/credentials.html',
        replace: true        
    }
});