(function() {
    'use strict';
    
    angular
        .module('app.auth')
        .controller('AuthController', AuthController);
    
   AuthController.$inject = ['$location', 'authService']; // different authentication tasks
    
    function AuthController($location, authService) { // add the dependency as a parameter to controller
        var vm = this;
        

        vm.error = null;
        vm.register = register;
        vm.login = login;
        
        function register(user) {
            return authService.register(user) 
                .then(function() {                      
                    vm.login(user);
                })
                .then(function() {
                    return authService.sendWelcomeEmail(user.email);
                })
                .catch(function(error) {
                    vm.error = error;
                });  
        }
        
        function login(user) {
            return authService.login(user)
                .then(function(loggedInUser) {
                    console.log(loggedInUser);
                    $location.path('/waitlist');
                })
                
                .catch(function(error) {
                    vm.error = error;
                });    
        }
        

    }
})();