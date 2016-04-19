myApp.controller('adaptiveController', ['$scope', '$log', 'tokenService', function ($scope, $log, tokenService) {
    $scope.auth = {};
    $scope.auth.name = '';
    $scope.auth.password = '';
    $scope.auth.serverUrl = 'http://54.148.50.104:8080';
    
    $log.info("User" + $scope.user);
    
    $scope.validate = function() {        
        console.log($scope.auth);
        tokenService.listTables($scope.auth);
        alert('User: ' + $scope.auth.name);
    };
    
    
}]);