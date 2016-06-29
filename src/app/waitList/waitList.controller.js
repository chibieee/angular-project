(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['textMessageService', 'partyService', 'user']; //from angularfire module. WaitListController needs dependecy 'firebasearray'
    
    function WaitListController(textMessageService, partyService, user) {
        var vm = this;
        
        vm.newParty = new partyService.Party();            // calls party constructor in partservice
        vm.parties = partyService.getPartiesByUser(user.uid);
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;
        vm.toggleDone = toggleDone;
        
        function addParty() {
            vm.parties.$add(vm.newParty);                    // $add is firebase method form of push
            vm.newParty = new partyService.Party();
        }
        
        function removeParty(party) {
            vm.parties.$remove(party);
        }
        
        function sendTextMessage(party) {
            textMessageService.sendTextMessage(party, vm.parties); 
        }
        
        function toggleDone(party) {
            vm.parties.$save(party);
        }
    }
    
    
})();