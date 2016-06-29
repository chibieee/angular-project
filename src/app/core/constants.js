(function() {
    'use strict';
    
    angular
        .module('app.core')  //without dependency array is grabbing app.core, with dependency array you are making a new module
        .constant('FIREBASE_URL', 'https://angularexample-gregg.firebaseio.com/')
})();