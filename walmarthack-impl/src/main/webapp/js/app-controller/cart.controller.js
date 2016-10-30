/**
 * 
 */
(function () {
    'use strict';

    angular
        .module('youngMindApp')
        .controller('CartController', CartController)
        .directive('passwordValidate',PasswordValidate);

    CartController.$inject = ['$location'];
    function CartController($location) {
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