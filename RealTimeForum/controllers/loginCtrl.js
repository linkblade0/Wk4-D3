angular.module('rtfmApp')
.controller('loginCtrl', function($scope, userService, $state) {

  $scope.login = function() {
    userService.login($scope.user).then(function(authedUser) {
      $state.go('threads');
    }).catch(function(err) {
      console.log('bad login', err)
    })
  }

})
