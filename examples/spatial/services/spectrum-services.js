'use strict';

var spatialService = angular.module('spatialServices');

/**
 * The $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's 
 * XMLHttpRequest object or via JSONP.
 */
spatialService.service('tokenService', function ($log, $http, $httpProvider) {
    this.serviceName = 'TokenService';

    this.getAutorization = function (userName, password) {

    };

    this.getToken = function (userName, password, serverURL) {
        $log.debug("The url that would be called is: " + serverURL);
        log.info('User: ' + userName);
        log.info('Password: ' + password)

        $http({
            method: 'GET',
            url: 'http://152.144.219.103:8080/security/rest/ccess/session/30/'
        }).then(function (response) {
            log.console(response);
        });
    }
});