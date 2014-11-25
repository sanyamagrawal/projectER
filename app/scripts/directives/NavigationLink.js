// Click to navigate
// similar to <a href="#/partial"> but hash is not required,
// e.g. <div navigation-link="/partial">

app.directive("navigateLink", function($location) {
    return {
        link: function(scope, element, attrs) {
            element.on("click", function() {
                scope.$apply(function() {
                    $location.path(attrs.navigateLink);
                });
            });
        }
    };
});
