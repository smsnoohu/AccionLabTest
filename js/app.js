var myApp = angular
			.module('myModule', [])
			.controller("controller", function($scope, $http){
				$http({
					method: 'get',
					url: 'http://jsonplaceholder.typicode.com/posts'
				}).then(function(response){
					$scope.userData = response.data;
				},function (error){
					console.log(error, 'can not get data.');
				});

				$scope.sortColumn = 'userId';

				$scope.reverseSort = false;

				$scope.sortDate = function(column){
					$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
					$scope.sortColumn = column;
				}

				$scope.sortClass = function(column){
					if($scope.sortColumn == column){
						return $scope.reverseSort ? 'down' : 'up'
					}
					return 'none';
				}
});