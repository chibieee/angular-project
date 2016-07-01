(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['partyService', 'user']; //from angularfire module. WaitListController needs dependecy 'firebasearray'
    
    function WaitListController(partyService, user) {
        var vm = this;
        
        vm.parties = partyService.getPartiesByUser(user.uid);
    }
    
})();