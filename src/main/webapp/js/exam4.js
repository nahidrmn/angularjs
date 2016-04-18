angular.module('app4',[])

.controller("playerCtrl",function($scope){
	$scope.barryBonds = [
		{name:"Barry Bonds", avg:0.298, hr:762,obp:0.444},
		{name:"Hank Aron", avg:0.305, hr:755,obp:0.374},
		{name:"Babe Ruth", avg:0.342, hr:714,obp:0.474},
		{name:"Ted Williams", avg:0.344, hr:521,obp:0.482}
	];
})
.directive('player',function(){
	var directive = {};
	directive.restrict = 'E';
	directive.template = "{{player.name}} had a {{player.avg} AVG with {{player.hr}} homeruns and a {{player.obp}} OBP}";

	directive.scope = {player: "=name"};
	directive.compile = function(element,attributes){
		var linkFunc = function($scope, element, attributes){
			element.bind('click',function(){
				element.html('Barry disappeard')
			});
		}
		return linkFunc;
	}
	return directive;
});