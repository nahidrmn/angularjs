var app1 = angular.module('app1',[]);

app1.controller('ctrl1',function($scope){
	$scope.first=1;
	$scope.second=2;
	$scope.updateValue = function(){
		$scope.calculation=$scope.first+'+'+$scope.second+'='+(+$scope.first + +$scope.second);
	};
});

app1.controller('ctrl2',function($scope){
	var moods = ["disregard","happy","sad","terrific"];
	$scope.feelings=moods[Math.floor((Math.random()*4))];
});

app1.controller('ctrl3',function($scope){
	$scope.groceries = [
	                   {item:"tomatoes",purchased:false},
	                   {item:"potatoes",purchased:true},
	                   {item:"hummus",purchased:true},
	                   {item:"salad",purchased:false}
	                  ];
	$scope.getList = function(){
		return $scope.showList ? "uGroceryList.html" : "oGroceryList.html";
	};
	$scope.blur=0;
	$scope.keydown = function(e){
		$scope.kdKey = String.fromCharCode(e.keyCode);
	};
	$scope.disableButton=true;
	$scope.dayTimeButton=true;
	
});
