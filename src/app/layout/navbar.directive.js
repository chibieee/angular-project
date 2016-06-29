(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .directive('ggNavbar', ggNavbar);
    
    function ggNavbar() {
        return {                                           /// directive definition object
            templateUrl: 'app/layout/navbar.html',         /// reference file for template
            restrict: 'E',                                 /// how we are going to use layout 'E' for element  
            scope: {},                                     /// scope allows this directive to only access the data
            controller: NavbarController,                  /// that is defined in this controller
            controllerAs: 'vm'
        }
    }
    
    NavbarController.$inject = ['$location', 'authService'];
    
    function NavbarController($location, authService) {
        var vm = this;
        
        vm.isLoggedIn = authService.isLoggedIn;
        vm.logout = logout;
        
        function logout() {
            authService.logout();
            $location.path('/');
        }
    }
})();