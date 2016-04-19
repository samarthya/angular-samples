angular.module('myFooter', []).
directive('myCopyright', function(){
    return {
      restrict: 'ACEM',
        templateUrl: '../directives/footer-samarthya.html',
        replace: true
    };
});

