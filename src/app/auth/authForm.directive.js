(function() {
    'use strict';
    
    angular
        .module('app.auth')
        .directive('ggAuthForm', ggAuthForm);
    
    function ggAuthForm() {
        return {
            templateUrl: 'app/auth/authForm.html',
            restrict: 'E',
            controller: AuthFormController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                error: '=', //binding objects
                formTitle: '@', //binding strings
                submitAction: '&' //binding functions
            }
        };
    }
    
    function AuthFormController() {
        var vm = this;
        
        vm.user = {
            email: '',
            password: ''
        };
        
    }
})();