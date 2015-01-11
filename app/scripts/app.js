"use strict";
/* global smoothScroll:true, app:true */
/* exported smoothScroll, app */

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */

var app = angular.module("websiteApp", [
    "ngRoute",
    "ngResource",
    "ngAnimate",
    "angular-loading-bar",
    "mgcrea.ngStrap"
]);

app.config(function($locationProvider) {
    // configure html5 to get links working
    $locationProvider.html5Mode(false);
});

app.run(function($location, $window, $rootScope, $anchorScroll) {
    var bodyElement = angular.element($window.document.body),
        targetElement = bodyElement; //angular.element(document.querySelector('body > .bs-docs-container'));
    $.material.init();
    targetElement.on("click", function(evt) {
        var el = angular.element(evt.target),
            hash = el.attr("href");

        if (!hash || hash[0] !== "#") {
            return;
        }
        if (hash.length > 1 && hash[1] === "/") {
            return;
        }
        if (evt.which !== 1) {
            return;
        }
        evt.preventDefault();
        console.warn("$location.hash", hash);
        $location.hash(hash.substr(1));
        // $location.path('/' + hash.substr(1));
        // $location.search('id', hash.substr(1));
        $anchorScroll();
        $rootScope.$digest();
        console.warn("in");
    });

    // Initial $anchorScroll()
    setTimeout(function() {
        $anchorScroll();
    }, 0);
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "views/LoginView.html",
            controller: "LoginController"
        })
        .when("/signup", {
            templateUrl: "views/Signup.html",
            controller: "SignupController"
        })
        .when("/homepage", {
            templateUrl: "views/HomepageView.html",
            controller: "HomepageController"
        })
        .when("/loginSuccess", {
            templateUrl: "views/MyProfileView.html",
            controller: "MyProfileController"
        })

    .otherwise({
        redirectTo: "/homepage"
    });
});
