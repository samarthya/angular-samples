var myApp = angular.module('example4', ['ngRoute']);

myApp.directive('myNavigation', function(){
    return {
      restrict: 'ACE',
        templateUrl: '../directives/navigation-home.html',
        replace: true
    };
});

myApp.directive('myCopyright', function(){
    return {
      restrict: 'ACEM',
        templateUrl: '../directives/footer-samarthya.html',
        replace: true
    };
});

myApp.controller('controllerExample4', ['$scope', '$log', function($scope, $log) { 
    $log.debug('Inside the controller');
}]);