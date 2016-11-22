/**
 * 
 */
(function() {
	'use strict';

	angular.module('indraApp').controller('HomeController', HomeController);

	HomeController.$inject = [ 'UserService', '$rootScope', '$cookieStore',
			'$location' ];
	function HomeController(UserService, $rootScope, $cookieStore, $location) {
		var vm = this;
		vm.url = 'rest/user/authenticate/';
		vm.user = null;
		vm.systemView = systemView;
		vm.isAuthorized=$cookieStore.get('globals').currentUser.username;
		vm.loading="LOADING ...";
		initController();

		function initController() {
			loadCurrentUser();
		}

		function loadCurrentUser() {
			UserService.GET(vm.url + $rootScope.globals.currentUser.username)
					.then(function(response) {
							vm.isAuthorized=true;
					});

		}

		function systemView() {
			$location.path('/overview');
		}
	}

})();