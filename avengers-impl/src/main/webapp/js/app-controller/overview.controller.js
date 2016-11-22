/**
 * 
 */
(function() {
	'use strict';

	angular.module('indraApp').controller('OverViewController',
			OverViewController);

	OverViewController.$inject = [ 'UserService', '$location', '$rootScope',
			'FlashService', '$cookieStore', '$scope','$interval','$filter' ];
	function OverViewController(UserService, $location, $rootScope,
			FlashService, $cookieStore, $scope,$interval,$filter) {
		var vm = this;
		vm.isAuthorized = $cookieStore.get('globals').currentUser.username;
		vm.url = 'rest/user/overview';
		vm.data = {};
		vm.isHome = true;
		vm.onGeneratorSelected = onGeneratorSelected;
		vm.onDateSelected= onDateSelected;
		vm.dgSpecificData = {};
		var generatorChoosen =0;
		loadSystemOverview();
		
		vm.dateString=$filter('date')(new Date(), 'MM/dd/yyyy');
		var dateToService=dateTOService(vm.dateString);
		$interval(function(){
			//alert('interval');
			console.log('interval ----> ');
			loadSystemOverview();
			vm.dailyEnergy.read();
		},100000000);
		
		function onDateSelected(e){
			dateToService=dateTOService(vm.dateString);
			//alert('loaded date ---> '+this.value()+" --- < ---"+vm.dateString);
			console.log('loaded date  --- < ---'+vm.dateString)
			vm.dailyEnergy.read();
			
		}
		function dateTOService(inputData){
			//alert('-----> dateToString ');
			console.log('-----> dateToString ');
			return inputData.replace(/\//g,'-');
		}
		function onGeneratorSelected(e) {
			//alert('loaded generator   --- > ' + this.value());
			console.log('onGeneratorSelected ---- ' + this.value());
			
			console.log('called dataSource.sync()');
			generatorChoosen = this.value();
			
			vm.dailyEnergy.read();
			
		}

		function loadSystemOverview() {
			console.log('load system overview');
			//alert('load overview --------> should  be loaded first');
			UserService.GET(vm.url).then(function(response) {
				if (response) {
					vm.data = response.data;
				}
			});

		}

		vm.generatorDataSource = new kendo.data.DataSource({
			autoSync : true,
			transport : {
				read : {
					url : "rest/meter/all-meters",
					dataType : "json"
				}
			}
		});

		vm.customDropDownOptions = {
			dataBound : function(e) {
				
				generatorChoosen=this.value();
				//alert('data bound  ---- >  ' +generatorChoosen);
				vm.dailyEnergy.read();
			},
			change : vm.onGeneratorSelected,
			dataTextField : "meterNo",
			dataValueField : "meterNo"
		};

		vm.dailyEnergy = new kendo.data.DataSource({
			autoSync : true,
			
			transport : {
				read :{
					url: function(e){
						//alert('daily url '+'rest/meter/daily-energy/'+generatorChoosen+'/'+dateToService);
						return 'rest/meter/daily-energy/'+generatorChoosen+'/'+dateToService;
					},
					dataType:'json'
				}
			},
			sort : {
				field : "timeInstant",
				dir : "asc"
			},

			schema : {
				data : "dailyEnergies"
			},
			change : function() {
				//alert('change line chart');
			}
		});

	}

})();