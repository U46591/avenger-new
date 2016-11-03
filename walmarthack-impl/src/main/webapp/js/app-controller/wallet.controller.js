/**
 * 
 */
(function () {
    'use strict';

    angular
        .module('youngMindApp')
        .controller('WalletController', WalletController)
        .directive('passwordValidate',PasswordValidate);

    WalletController.$inject = ['$location','UserService'];
    function WalletController($location,UserService) {
       var ym=this;
       ym.login=Login;
       ym.wallets=UserService.GETWALLET();
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