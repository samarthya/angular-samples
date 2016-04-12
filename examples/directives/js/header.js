var myHeader = angular.module('myHeader', ['ngRoute']);

/**
 * @directive my-header
 * @description
 */
myHeader.directive('returnMenuHeader', function () {
    return {
        replace: true,
        restrict: 'ACEM',
        templateUrl: '../directives/navigation-home.html',
        scope: {
            menuName: '@'
        },
        compile: function (element, attributes) {
            console.log(element);
            return {
                post: function (scope, element, attrs) {
                    console.log(scope);
                    console.log(scope.menuName);
                }
            }
        }
    }

})

myHeader.directive('returnMenuOnly', function () {
    return {
        replace: true,
        restrict: 'ACEM',
        templateUrl: '../directives/return-menu.html'
    }
})