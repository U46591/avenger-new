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
        	UserService.POST('login',ym.user)
            .then(function (response) {
                if (response.success) {
                	AuthenticationService.SetCredentials(response.data);
                    $location.path('/successPage');
                } else {
                    //FlashService.Error(response.message);
                    //vm.dataLoading = false;
                	alert('You Have Entered a Wrong Credential');
                }
            });
        };
    
    }
    
    function PasswordValidate(){
    	//alert('password validate')
    }

})();