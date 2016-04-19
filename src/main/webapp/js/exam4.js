angular.module('app4',[])

/*.service('HelloService', function(){
	this.helloService = function(){
			console.log("Hello Service");
	};
})

.factory('HelloFactory',function(){
	var factory = {};

	factory.helloFactory = function(){
		console.log('Hello Factory');
	};
	return factory;
})

app4.controller('mainCtrl',function(HelloService,HelloFactory){
	HelloService.helloService();
	HelloFactory.helloFactory();
});*/

.controller('mainCtrl',function($scope, $window, $location, $interval, $log, $exceptionHandler){
	$scope.greetUser = function(userName){
		console.log(userName);
		$window.alert('Hello '+userName);
	}
	$scope.currentURL = $location.absUrl();
	$scope.theProtocol = $location.protocol();
	$scope.currHost = $location.host();
	$scope.currPort = $location.port();
	$location.path("#/the/path");
	$scope.currPath = $location.path();
	$location.search("random=stuff");
	$scope.currSearch = $location.search();

	$interval(function(){
		var hour = new Date().getHours();
		var minutes = ('0' + new Date().getMinutes()).slice(-2);
		var seconds = ('0' + new Date().getSeconds()).slice(-2);
		$scope.time = hour + ":" + minutes + ":" + seconds;
	},2000);

	$scope.$log = $log;

	$scope.throwException = function(){
		try {
			throw new Error("Exception Thrown");
		} catch (e) {
			$exceptionHandler(e.message, "Caught exception");
		} finally {
			console.log('From finally block');
		}
	};


});
