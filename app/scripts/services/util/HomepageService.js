"use strict";

app.factory("HomepageService", function(BaseService) {
    return {
        saveFeedback: function(params, data) {
            var dataURL = BaseService.getUIServiceURL("Contact");
            return BaseService.doXHRPost(dataURL, params, data);
        },

        checkUserValid: function(response) {
            var dataURL = "https://www.google.com/recaptcha/api/siteverify",
                params = {
                    secret: "6Lctsf8SAAAAACvi7DjIAvJg1thfty-H-D7qN4OJ",
                    response: response
                };

            return BaseService.doXHRGet(dataURL, params);
        }
    };
});
