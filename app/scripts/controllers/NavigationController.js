"use strict";

app.controller("NavigationController", function($scope, $location, LoginService) {
    $scope.post = {
        url: "http://",
        title: ""
    };

    $scope.submitPost = function() {
        LoginService.create($scope.post).then(function(ref) {
            $location.path("/posts/" + ref.name());
            $scope.post = {
                url: "http://",
                title: ""
            };
        });
    };

});
