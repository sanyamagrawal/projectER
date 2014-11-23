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

var app = angular.module("websiteApp", ["ngRoute", "ngResource", "firebase"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "views/LoginView.html",
            controller: "LoginController"
        })
        .when("/", {
            templateUrl: "views/NavigationView.html",
            controller: "NavigationController"
        })
        .otherwise({
            redirectTo: "/"
        });
});

app.constant("FIREBASE_URL", "https://incandescent-inferno-8790.firebaseIO.com");
