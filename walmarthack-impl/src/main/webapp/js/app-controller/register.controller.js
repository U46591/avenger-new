/**
 * 
 */
(function(){
	'use strict';
	
	angular
    	.module('youngMindApp')
    	.controller('RegisterController', RegisterController)
    	.directive('passwordValidattion',PasswordValidation)
    	.directive('validPasswordC',ValidatePasswordC);
	
	RegisterController.$inject=['UserService','$location','AuthenticationService'];
	function RegisterController(UserService,$location,AuthenticationService){
		//alert('register controller ***');
		var ym = this;
		ym.user={};
		ym.register = Register;
		
		function Register(){
			//alert('register ------');
            UserService.POST('register',ym.user)
            .then(function (response) {
                if (response.success) {
                	AuthenticationService.SetCredentials(response.data);
                    $location.path('/successPage');
                } else {
                    //FlashService.Error(response.message);
                    //vm.dataLoading = false;
                }
            });
		}
	}
	
	function PasswordValidation(){
		alert('password validation -------');
	}
	
	function ValidatePasswordC(){
		alert('password validation C-------');
	}
	
})();