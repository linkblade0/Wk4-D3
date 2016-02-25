angular.module('rtfmApp')
.controller('signupCtrl', function($scope, userService) {

  $scope.register = function() {
    userService.register($scope.newUser)
    .then(function(userRef) {
    }).catch(function(err) {
      console.log('Error', err);
    })
  }

})
