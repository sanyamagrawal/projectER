"use strict";

app.factory("HomepageService", function(BaseService) {
    return {
        saveFeedback: function(params, data) {
            var dataURL = BaseService.getUIServiceURL("Insecure");
            return BaseService.doXHRPost(dataURL, params, data);
        }
    };
});
