"use strict";
/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */

var app = angular.module("websiteApp", ["ngRoute", "ngResource", "angular-loading-bar", "firebase"]);

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
        .when("/", {
            templateUrl: "views/HomepageView.html",
            controller: "HomepageController"
        })
        .when("/loginSuccess", {
            templateUrl: "views/MyProfileView.html",
            controller: "MyProfileController"
        })

    .otherwise({
        redirectTo: "/"
    });
});

app.constant("FIREBASE_URL", "https://incandescent-inferno-8790.firebaseIO.com");
