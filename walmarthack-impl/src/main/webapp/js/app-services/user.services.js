/**
 * 
 */
(function () {
    'use strict';

    angular
        .module('youngMindApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http,$location,$cookieStore) {
    	//alert('USER SERVICE *************');
        var services = {};
        var ym=this;
        ym.url="https://wal-mart-hack.herokuapp.com/rest/user/"
        services.GET=GET;
        services.POST=POST;
        return services;
        
        function GET(url){
        	return $http.get(url).then(handleSuccess,handleError);
        }
        function POST(url,data){
        	//alert('service layer post method ');
        	return $http({
        		method:'POST',
        		url:ym.url+url,
        		data:data,
        		headers:{
        			'Content-Type':'application/json',
        			'Accept' :'application/json'
        		}
        	}).then(handleSuccess,handleError);
        	//return $http.post(url,data).then(handleSuccess,handleError);
        }
        
        // private functions
        function handleSuccess(res) {
        	res.success=true;
            return res
        }

        function handleError(error) {
        	res.success=false;
        	return error;
           /* return function () {
                return { success: false, message: error };
            };*/
        }
    }

})();