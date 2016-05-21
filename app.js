(function() {

    angular.module("DirectiveApp", [])
        .controller('kate', ['$scope', function($scope) {
            $scope.welcome = "YOLO";
            $scope.listOfItems = [{
                name: "Red Bull",
                description: "delicious beverage"
            }, {
                name: "water",
                description: "refreshing beverage"
            }, {
                name: "coffee",
                description: "hot beverage of caffeine"
            }, {
                name: "milk",
                description: "calcium filled cereal holder"
            }, {
                name: "sweet tea",
                description: "Cold, sugared tea"
            }, {
                name: "breakfast tea",
                description: "hot team served with milk and sugar"
            }, {
                name: "Monster",
                description: "The white one is the best monster"
            }, {
                name: "cinnamon tea",
                description: "hot tea with cinnamon and cloves"
            }, {
                name: "diet dr pepper",
                description: "better than diet pepsi"
            }, {
                name: "pineapple cider",
                description: "most delicious alcoholic cider"
            }, {
                name: "cranberry juice",
                description: "healthy and delicious with sparkling water"
            }];
            $scope.bigObject = {};
            $scope.bigObject.selectedItems = [];
            $scope.checked;
            $scope.testing = function(t, listItem) {
                t.checked ? $scope.bigObject.selectedItems.push(listItem) : $scope.removeItem(listItem);
            };
            $scope.removeItem = function(listItem) {
                $scope.bigObject.selectedItems = $scope.bigObject.selectedItems.filter(function(item) {
                	for (var prop in item){
                		if (item[prop] !== listItem[prop]){
                			return true;
                		}
                	}
                	return false;
                });
            }
        }])
        .directive('dropDown', function() {

        });

})();