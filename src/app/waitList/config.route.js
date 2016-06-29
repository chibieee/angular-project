(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .config(configFunction)
    
    configFunction.$inject = ['$routeProvider']; 
    
    function configFunction($routeProvider) {
        $routeProvider.when('/waitlist', {
            templateUrl: 'app/waitList/waitList.html',
            controller: 'WaitListController',
            controllerAs: 'vm',
            resolve: {user: resolveUser}       /// controller will only load if the function resolves successfully
        });
        
    }
    
    resolveUser.$inject = ['authService'];
    
    function resolveUser(authService) {
        return authService.firebaseAuthObject.$requireAuth();
    }
    
})();