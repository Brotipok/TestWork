var pictureListApp = angular.module('pictureListApp', ['ngRoute']);

pictureListApp.config(['$routeProvider', function($routeProvide){
	$routeProvide
	.when('/', {
		templateUrl: '/template/home.html',
		controller: 'pictureListController'
	})
	.when('/image/:imageId', {
		templateUrl: '/template/image.html',
		controller: 'imageCtrl'
	})
	.when('/album/:AlbumId/photos', {
		templateUrl: '/template/Album.html',
		controller: 'albumCtrl'
	})
	.otherwise({
		redirectTo: "/"
	});
}]);

pictureListApp.controller('imageCtrl',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	$http.get('http://jsonplaceholder.typicode.com/photos/' + $routeParams.imageId).then(function(responce) {
		$scope.photo = responce.data;
	});
}]);


pictureListApp.controller('albumCtrl',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	$http.get('http://jsonplaceholder.typicode.com/albums/'+ $routeParams.AlbumId + '/photos').then(function(responce) {
	$scope.album = responce.data;
	$scope.albumId = $routeParams.AlbumId;
	});
}]);

pictureListApp.controller('pictureListController', function pictureListController($scope, $http) {

	$http.get('http://jsonplaceholder.typicode.com/photos').then(function(responce) {
		$scope.photos=responce.data;
    });
});

