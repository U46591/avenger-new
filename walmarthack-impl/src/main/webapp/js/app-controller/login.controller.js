/**
 * 
 */
(function () {
    'use strict';

    angular
        .module('youngMindApp')
        .controller('LoginController', LoginController)
        .directive('passwordValidate',PasswordValidate);

    LoginController.$inject = ['$location'];
    function LoginController($location) {
       var ym=this;
       ym.user={};
       ym.login=Login;
       
       var staticMethods={};
       staticMethods.logout=Logout;
       
       return staticMethods;
       
        (function initController() {
         // alert('login controller ----');
        })();
            
        function Logout(){
        //	alert('logout ------');
        };
        
        function Login() {
        //	alert('login ------');
        };
    
    }
    
    function PasswordValidate(){
    	//alert('password validate')
    }

})();