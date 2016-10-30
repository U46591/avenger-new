
 /**
  * 
  */
 (function(){
 	'use strict';
 	
 	angular
     	.module('youngMindApp')
     	.controller('DashboardController', DashboardController);
     	
 	DashboardController.$inject=['UserService','$location'];
 	function DashboardController(UserService,$location){
 		//alert('Dashboard controller ***');
 		var ym = this;
 		ym.register = Register;
 		UserService.GET('products.json') .then(function (response) {
 			
            if (response.success) {
            	ym.products = response.data.products;
            	console.log("hello.."+ym.products)
                //FlashService.Success('Registration successful', true);
              //  $location.path('/successPage');
            } else {
                //FlashService.Error(response.message);
                //vm.dataLoading = false;
            }
        });
 		
 		
 		
 		ym.redirectToHome=function()
 		{
 			
 			$location.path("/successPage");
 		}

 		
 		function Register(){
 			alert('register ------');
             UserService.POST('http://',ym.user)
             .then(function (response) {
                 if (response.success) {
                     //FlashService.Success('Registration successful', true);
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