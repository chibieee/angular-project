(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('partyService', partyService);
    
    partyService.$inject = ['$firebaseArray', 'firebaseDataService'];
    
    function partyService($firebaseArray, firebaseDataService) {
        
        var parties = null;
        
        var service = {
            Party: Party,
            getPartiesByUser: getPartiesByUser,
            reset: reset                                  //break connection to firebase array
        };
        
        return service;
        
        ////////////
        
        function Party() {
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;
        }
        
        function getPartiesByUser(uid) {
            // if parties is null.
                // create a firebasearray and set it equal to parties
            // return parties
            if (!parties) {
                parties = $firebaseArray(firebaseDataService.users.child(uid).child('parties'));
            }
            return parties;
        }
        
        function reset() {
            //break connection to firebasearray
            if(parties) {
                parties.$destroy();
                parties = null;
            }
        }
    }

})();