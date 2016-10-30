/**
 * 
 */

(function () {
    'use strict';
    angular
        .module('youngMindApp', ['ngRoute', 'ngCookies','ui.bootstrap', 'ionic'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
        	controller : 'LoginController',
    		templateUrl : 'homePage.html',
    		controllerAs : 'ym'
    	})

    	.when('/register', {
    		controller : 'RegisterController',
    		templateUrl : 'partial/register.htm',
    		controllerAs : 'ym'
    		
    	})
    	.when('/successPage', {
    		templateUrl : 'partial/dashboard.htm',
    		controller : 'DashboardController',
    		controllerAs : 'ym'

    	})

    	.when('/viewWallet', {
    		templateUrl : 'partial/wallet.htm',
    		controller : 'WalletController',
    		controllerAs : 'ym'

    	})
    	.when('/viewCart', {
    		templateUrl : 'partial/cart.htm',
    		controller : 'CartController',
    		controllerAs : 'ym'

    	})
    	.when('/viewProducts', {
    		templateUrl : 'productView.html',
    		controller : 'productCntrl'

    	})
        .otherwise({ redirectTo: '/' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        /*$rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
*/
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
           /* // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }else{
            	var isAuthorized =true;
            	//$cookieStore.put('isAuthorized',isAuthorized);
            	//var path= $cookieStore.get('path');
            	//$location.path(path);
            	
            }
            
*/        
        //alert('location change event ***** ')	
        });
    }

})();