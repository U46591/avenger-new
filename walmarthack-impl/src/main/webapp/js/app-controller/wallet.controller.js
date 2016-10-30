/**
 * 
 */
(function () {
    'use strict';

    angular
        .module('youngMindApp')
        .controller('WalletController', WalletController)
        .directive('passwordValidate',PasswordValidate);

    WalletController.$inject = ['$location'];
    function WalletController($location) {
       var ym=this;
       ym.login=Login;
        (function initController() {
          
        })();
        
        ym.clear=function(){
        
        };
        function Login() {
        };
        
        ym.redirectToHome=function()
    	{
    		
    		$location.path("/successPage");
    	}
    
    }
    
    function PasswordValidate(){
    	alert('password validate')
    }

})();