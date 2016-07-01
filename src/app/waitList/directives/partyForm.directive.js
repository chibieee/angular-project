(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .directive('ggPartyForm', ggPartyForm);   //factory function returns an object
    
    function ggPartyForm() {
        return {
            templateUrl: 'app/waitList/directives/partyForm.html',
            restrict: 'E',
            controller: PartyFormController,
            controllerAs: 'vm',
            bindToController: true,  //binds the  properties in isolate scope to controller
            scope: {
                parties: '='        //have to define what things you want to pass in from parent controller, type of binding
            }
        };
    }
    
    PartyFormController.$inject = ['partyService'];
    
    function PartyFormController(partyService) {
        var vm = this;
        
        vm.newParty = new partyService.Party();
        vm.addParty = addParty;
        
        function addParty() {
            vm.parties.$add(vm.newParty);                   
            vm.newParty = new partyService.Party();
        }
    }
    
    
})();