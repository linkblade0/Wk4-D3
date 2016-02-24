angular.module('myApp')
.controller('carsCtrl', function($scope, $firebaseArray, carsRef) {

  $scope.cars = $firebaseArray(carsRef)







})
