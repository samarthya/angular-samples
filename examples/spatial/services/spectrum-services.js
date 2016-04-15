var spatialService = angular.module('spatialServices', ['ngResource', 'base64']);

spatialService.value('meta', {
    "version": 1,
    "Information": "SpatialService"
});

/**
 * A module is a collection of configuration and run blocks 
 * which get applied to the application during the bootstrap 
 * process. In its simplest form the module consists of a 
 * collection of two kinds of blocks:
 *
 * Configuration blocks - get executed during the provider 
 * registrations and configuration phase. Only providers and 
 * constants can be injected into configuration blocks. This 
 * is to prevent accidental instantiation of services before 
 * they have been fully configured.
 *
 * Run blocks - get executed after the injector is created 
 * and are used to kickstart the application. Only instances 
 * and constants can be injected into run blocks. This is to 
 * prevent further system configuration during application run time.
 */
spatialService.config(['$httpProvider', '$resourceProvider', function ($httpProvider, $resourceProvider) {
    $httpProvider.defaults.headers.get = {};
    $httpProvider.defaults.headers.get.Authorization = "Basic YWRtaW46YWRtaW4=";
    $httpProvider.defaults.headers.get.Accept = "*/*";
    console.log('Inside Config method of spatial service');

    $resourceProvider.defaults.stripTrailingSlashes = true;
}]);

/**
 * The $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's 
 * XMLHttpRequest object or via JSONP.
 */
spatialService.service('tokenService', function ($log, $http, $resource, $base64) {
    'use strict';

    this.serviceName = 'TokenService';

    this.getEncodedString = function (username, password) {
        return 'Basic ' + $base64.encode(username + ':' + password);

    };

    this.getTokenwithHTTP = function (username, password) {
        if (username === null || password === null) {
            $log.error(' The username and password cannot be null');
            return null;
        }
        var stringEncoded = 'Basic ' + $base64.encode(username + ':' + password);

        $log.info('Encoded String: ' + stringEncoded);

//        var tokenInformation = $http({
//            method: 'JSONP',
//            url: 'http://152.144.219.103:8080/security/rest/token/access/session/30',
//            params: {
//                callback: 'JSON_CALLBACK'
//            },
//            headers: {
//                'Authorization': stringEncoded            }
//
//        }).success(function (response) {
//            tokenData = response;
//            console.log(tokenData);
//            console.log('Token:   ' + tokenData.access_token);
//            console.log('Session: ' + tokenData.session);
//            console.log('Username: ' + tokenData.username);
//            return tokenData;
//
//        }).error(function (response) {
//            alert(response);
//        });
        var getResponse = $resource("http://152.144.219.103:8080/security/rest/token/access/session/30", {}, {
            get: {
                method: 'get',
                headers: {
                    'Authorization': stringEncoded
                }
            }
        });
        
        var response = getResponse.get();
        console.log(response);
        return null;

    };
    /**
     *  Get token information via Resource API that takes care of cross origin issues.
     * By Definition: A factory which creates a resource object that lets you interact with 
     *                RESTful server-side data sources.
     * The returned resource object has action methods which provide high-level behaviors without the need to interact with 
     * the low level $http service.
     */
    this.getTokenWithJSON = function (username, password) {
        if (username === null || password === null) {
            $log.error(' The username and password cannot be null');
            return null;
        }

        var stringEncoded = 'Basic ' + $base64.encode(username + ':' + password);

        $log.info('Encoded String: ' + stringEncoded);

        var tokenInformation = $resource("http://152.144.219.103:8080/security/rest/token/access/session/30", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: 'JSONP',
                headers: {
                    'Authorization': stringEncoded
                }
            }
        });


        console.log(tokenData);
        console.log('Token:   ' + tokenData.access_token);
        console.log('Session: ' + tokenData.session);
        console.log('Username: ' + tokenData.username);

        return tokenData;
    }

    /**
     * The $http service is a core Angular service that facilitates 
     * communication with the remote HTTP servers via the browser's 
     * XMLHttpRequest object or via JSONP.
     */
    this.getToken = function (userName, password, serverURL) {

        $log.info('Get Token call');

        $log.debug("The url that would be called is: " + serverURL);
        $log.info('User: ' + userName);
        $log.info('Password: ' + password)

        /** The $http service is a function 
         * which takes a single argument — a 
         * configuration object — that is used 
         * to generate an HTTP request and returns a promise. 
         */
        var config = {
            headers: {
                "Authorization": "Basic YWRtaW46YWRtaW4="
            }
        };


        $http.get("http://152.144.219.103:8080/security/rest/token/access/session/30").then(function success(response) {
            $log.debug(response);
            $log.info('Returned ' + response.status);
            $log.info('Status ' + response.statusText);
        }, function failure(response) {
            $log.error(response);
            $log.error("Status Code: " + response.status);
            if (response.statusText != null) {
                $log.error("Status: " + response.statusText);
            }
        });

    };

    this.getAuthorization = function (userName, password) {
        console.log('Service Name');
    };

    /**
     * This is a dummy function 
     */
    this.callGoogle = function () {
        $log.info(' Calling dummy function ');
        $http.get("http://www.google.co.in").then(function success(response) {
            $log.debug(response);
            $log.info('Returned ' + response.status);
            $log.info('Status ' + response.statusText);
        }, function failure(response) {
            $log.error(response);
            $log.error("Status Code: " + response.status);
            if (response.statusText != null) {
                $log.error("Status: " + response.statusText);
            }
        });

    };
});