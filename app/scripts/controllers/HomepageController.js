"use strict";

app.controller("HomepageController", function($scope, $window, HomepageService) {


    $scope.contactUsFormSubmit = function(form) {
        //var reCaptchaResponse = $window.grecaptcha.getResponse();
        if (form.$valid) {
            saveFeedback(true);
            //HomepageService.checkUserValid(reCaptchaResponse).then(saveFeedback.bind(this), userInvalid.bind(this));
        }
    };
    $scope.renderReCaptcha = function() {
        debugger;
        $window.grecaptcha.render("recaptcha-container", {
            "sitekey": "6Lctsf8SAAAAAIoacZD_Q9UOANthxE7G0c1VCx0C"
        });
    };

    function saveFeedback(response) {
        var data;
        if (!response) {
            userInvalid();
            return;
        }

        data = {
            Name: $scope.contactus.fullName,
            Email: $scope.contactus.emailId,
            FeedBack: $scope.contactus.feedback,
            Subject: "General"
        };
        HomepageService.saveFeedback({}, data).then(function(response) {
            console.log(response);
        });
    }

    function userInvalid() {}
});
