"use strict";

app.controller("LoginController", function($scope, LoginService) {
    $scope.loginDetails = LoginService.get();
    $scope.login = {
        username: "",
        password: ""
    };

    $scope.submitLogin = function() {
        LoginService.save($scope.login, function(response) {
            $scope.loginDetails[response.name] = $scope.login;
            $scope.login = {
                username: "",
                password: ""
            };
        });

    };

    $scope.deletePost = function(loginId) {
        LoginService.delete({
            id: loginId
        }, function() {
            delete $scope.loginDetails[loginId];
        });
    };
});
