var app2 = angular.module('app2',[]);


app2.controller('weatherCtrl',function($scope){
	$scope.weather = [
		{day:"Monday", rain: false},
		{day:"Tuesday", rain: true}
	];
});

app2.controller('utilCtrl',function($scope){

	$scope.students = [
		{name:"George Thomas",gpa:3.5},
		{name:"Susy Smith",gpa:3.6},
		{name:"Paul Marks",gpa:3.2},
		{name:"Sue Edgar",gpa:3.8}
	];
	$scope.student = {
		gpas:[
		{name:"George Thomas",gpa:3.5},
		{name:"Susy Smith",gpa:3.6},
		{name:"Paul Marks",gpa:3.2},
		{name:"Sue Edgar",gpa:3.8}
		]
	};
	$scope.currDate = new Date();
	$scope.randStr = "Aj jhor valobasha anonde veshe jawa dubidubi";
	$scope.randArray = [
		"Tomato",
		"Potato",
		"Bread",
		"Pickles",
		"Raisins"
	];
});

app2.controller('heroCtrl', function($scope, $rootScope){
	$scope.hero = [
		{realName:"Bruce Wayne", heroName:"Batman"},
		{realName:"Clark kent", heroName:"Superman"}
	];

	$scope.getHeroData = function(){
		heroSearch($scope.heroName);
	};
	function heroSearch(name){
		$scope.heroData="Not Found";
		for (var i = 0; i < $scope.hero.length; i++) {
		if ($scope.hero[i].heroName===name) {
			$scope.heroData = $scope.hero[i].realName +
			" is" + $scope.hero[i].heroName;
			}
		}
	}

	$scope.$on("heroUpdated",function(event,args){
		$scope.hero.push({
			realName: args.realName, heroName:args.heroName
		});
	});
	$scope.addHeroData = function(realName,heroName){
		$rootScope.$broadcast("heroUpdated",
		{
			realName:realName, heroName:heroName
		});
		console.log("Real: "+realName+" Hero: "+heroName);
	};

});

app2.controller('mainCtrl', function(){
	this.name="Animal";
	this.sound="Grr";

	this.animalClick = function(){
		alert(this.name + " says " + this.sound);
	};
});

app2.controller('dogCtrl',function($controller){
	var childCtrl=this;
	childCtrl.child = $controller('mainCtrl',{});
	childCtrl.child.name = "Dog";
	childCtrl.child.bark = "Woof";

	childCtrl.child.dogData = function(){
		alert(this.name + " says " + this.sound + " and " + this.bark);
	}
});

app2.controller('gListCtrl',function($scope){
	$scope.groceries = [
	                   {item:"tomatoes",purchased:false},
	                   {item:"potatoes",purchased:true},
	                   {item:"hummus",purchased:true},
	                   {item:"salad",purchased:false}
	                  ];

	$scope.addItem = function(newItem){
		if(!(newItem===undefined||newItem==="")){
			$scope.groceries.push({
				item:newItem,purchased:false
			});
			$scope.missingNewItemError="";
		}
		else {
			$scope.missingNewItemError="Please enter the item";
		}
	};

	$scope.user=[{
		fName: "Nahid",
		lName: "Rahman",
		street: "720 W Ave B",
		subscribe: "Subscribe",
		delivery: "Email"
	}];

	$scope.saveUser = function(userInfo){
		if ($scope.userForm.$valid) {
			$scope.user.push({
				fName: userInfo.fName, lName: userInfo.lName,
				street: userInfo.street, subscribe: userInfo.subscribe,
				delivery: userInfo.delivery
			});
			console.log("User Saved");
		} else {
			console.log("Error: Couldn't Save User");
		}
	};

});
