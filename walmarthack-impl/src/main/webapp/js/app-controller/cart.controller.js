/**
 * 
 */
(function () {
    'use strict';

    angular
        .module('youngMindApp')
        .controller('CartController', CartController)
        .directive('passwordValidate',PasswordValidate);

    CartController.$inject = ['$location','UserService'];
    function CartController($location,UserService) {
       var ym=this;
      
		ym.items=UserService.GETCART();
		console.log("Succesfuly added to cart",ym.items);
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