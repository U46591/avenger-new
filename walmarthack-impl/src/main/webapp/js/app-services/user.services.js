/**
 * 
 */
(function() {
	'use strict';

	angular.module('youngMindApp').factory('UserService', UserService);

	UserService.$inject = [ '$http' ];
	function UserService($http, $location, $cookieStore) {
		// alert('USER SERVICE *************');
		var services = {};
		var ym = this;
		var itemList = [];
		var walletAmnt;
		/**
		 * url to connect with openshift server
		 * ym.url="http://walmarthack-palakkal.rhcloud.com/rest/user/"
		 */
		ym.url = "http://walmarthack-palakkal.rhcloud.com/rest/user/"

		/**
		 * to connect to local server ** ym.url="rest/user/";
		 */

		services.GET = GET;
		services.POST = POST;
		services.ADDTOCART = ADDTOCART;
		services.GETCART = GETCART;
		services.REMOVECART = REMOVECART;
		services.ADDTOWALLET = ADDTOWALLET;
		services.GETWALLET = GETWALLET;
		return services;

		function ADDTOWALLET(amnt) {
			walletAmnt = amnt;
			return walletAmnt;
		}
		;
		
		function GETWALLET() {
			return walletAmnt;
		}
		;
		function REMOVECART() {
			itemList = [];
			return itemList;
		}
		;
		function ADDTOCART(item) {
			if (item) {
				itemList.push(item)
			}
			console.log("Carts :" + itemList);
			return itemList;
		}
		function GETCART() {
			return itemList;
		}
		;

		function GET(url) {
			return $http.get(url).then(handleSuccess, handleError);
		}
		function POST(url, data) {
			// alert('service layer post method ');
			return $http({
				method : 'POST',
				url : ym.url + url,
				data : data,
				headers : {
					'Content-Type' : 'application/json',
					'Accept' : 'application/json'
				}
			}).then(handleSuccess, handleError);
			// return $http.post(url,data).then(handleSuccess,handleError);
		}

		// private functions
		function handleSuccess(res) {
			res.success = true;
			return res
		}

		function handleError(error) {
			error.success = false;
			return error;
			/*
			 * return function () { return { success: false, message: error }; };
			 */
		}
	}

})();