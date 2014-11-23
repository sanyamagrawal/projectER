"use strict";

app.factory("LoginService", function($resource) {
    var url = "https://incandescent-inferno-8790.firebaseIO.com/logins/:id.json";
    return $resource(url);

});
