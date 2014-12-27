"use strict";

app.controller("HomepageController", function($scope, HomepageService) {
    $scope.contactUsFormSubmit = function(form) {
        var data = {};
        if (form.$valid) {
            data = {
                Name: $scope.contactus.fullName,
                Email: $scope.contactus.emailId,
                FeedBack: $scope.contactus.feedback,
                Subject: "General",
                Server: "relay-hosting.secureserver.net"
            };
            HomepageService.saveFeedback({}, data).then(function(response) {
                console.log(response);
            });
        }
    };
});
