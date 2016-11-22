/**
 * 
 */
(function() {
	'use strict';

	angular.module('youngMindApp').controller('CartController', CartController)
			.directive('passwordValidate', PasswordValidate);

	CartController.$inject = [ '$location', 'UserService' ];
	function CartController($location, UserService) {
		var ym = this;

		ym.items = UserService.GETCART();
		console.log("Succesfuly added to cart", ym.items);
		ym.login = Login;
		(function initController() {

		})();

		ym.clear = function() {

		};
		function Login() {
		}
		;

		ym.redirectToHome = function() {

			$location.path("/successPage");
		}
		ym.payCart = function() {

			if (!ym.checkRedeem) {
				ym.redeemAmnt = (ym.items[0].price * ym.items[0].offer) / 100;
				UserService.ADDTOWALLET(ym.redeemAmnt);
			}

			UserService.REMOVECART();
			ym.items = [];
			alert("Payment Done Sucessfuly!!!")
		}

	}

	function PasswordValidate() {
		alert('password validate')
	}

})();