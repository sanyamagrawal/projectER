"use strict";

app.factory("BaseService", function($q, $http, $log) {

    return {
        doXHRGet: function(url, data) {

            var deferred = $q.defer();
            $http({
                method: "GET",
                url: url,
                params: data
            }).success(function(data, status, headers, config) {
                $log.info(data, status, headers(), config);
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                $log.warn(data, status, headers(), config);
                deferred.reject(data);
            });

            return deferred.promise;
        },

        doXHRPost: function(url, params, data) {

            var deferred = $q.defer();
            $http({
                method: "POST",
                url: url,
                params: params,
                data: data
            }).success(function(data, status, headers, config) {
                $log.info(data, status, headers(), config);
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                $log.warn(data, status, headers(), config);
                deferred.reject(data);
            });

            return deferred.promise;
        },

        getUIServiceURL: function(url) {
            var hostURL = "http://api.educationcop.com/",
                dataURL = [hostURL, url].join("");
            return dataURL;
        }
    };
});
