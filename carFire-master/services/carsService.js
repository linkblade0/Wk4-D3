angular.module('myApp')
.service('carsService', function() {
  var ref = new Firebase('https://car-fire-mini.firebaseio.com/')
  this.getCars = function() {
      return ref.child('cars')
  }

  this.getCar = function(carId) {
    return ref.child('cars/' + carId)
  }

  this.getComments = function(carId) {
    return ref.child('cars/' + carId + '/comments')
  }

})
