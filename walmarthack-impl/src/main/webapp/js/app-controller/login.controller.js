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
       ym.login=Login;
        (function initController() {
          
        })();
        
        ym.clear=function(){
        
        };
        function Login() {
        };
    
    }
    
    function PasswordValidate(){
    	alert('password validate')
    }

})();