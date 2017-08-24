var app = angular.module('utahrenfaire', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	// $urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "views/home/home.html",
			controller: 'homeCtrl'
		})
		// .state('otherwise', {
		// 	url: '*path',
		// 	resolve: {
		// 		redirect: function($location) {
		// 			$location.path("/").replace()
		// 			// console.log("redirecting...")
		// 		}
		// 	}
		// });

		$locationProvider.html5Mode(true);

})