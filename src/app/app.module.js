(function() {
    'use strict';
    
    
    angular
        .module('app', [
        //Angular modules.
        'ngRoute',

        // Third-party modules.
        'firebase',
        
        // Custom modules.
        'app.auth',
        'app.core',
        'app.landing',
        'app.layout',
        'app.waitList'
        ])
        .config(configFunction)
        .run(runFunction);
    
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        })
    }
    
    runFunction.$inject = ['$rootScope', '$location']; // when promise is rejected it will broadcast route change error but its broascasted on the rootscope
    
    function runFunction($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
           if (error === "AUTH_REQUIRED") {
               $location.path('/');
           } 
        });
    }
    
    
})();

