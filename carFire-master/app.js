angular.module('myApp', ['firebase', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/cars')

  $stateProvider
    .state('cars', {
      url: '/cars',
      templateUrl: 'views/cars.html',
      controller: 'carsCtrl',
      resolve: {
        carsRef: function(carsService) {
          return carsService.getCars();
        }
      }
    })
    .state('car', {
    	url: '/cars/:carId',
    	templateUrl: '/views/car.html',
    	controller: 'carCtrl',
    	resolve: {
    		carRef: function(carsService, $stateParams) {
    			return carsService.getCar($stateParams.carId);
    		},
    		commentsRef: function(carsService, $stateParams) {
    			return carsService.getComments($stateParams.carId);
    		}
    	}
    });

})
