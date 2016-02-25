angular.module('rtfmApp')
.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray, userService, $state){

  $scope.threads = $firebaseArray(threadsRef)


  $scope.createThread = function(title) {
    console.log(title);
    $scope.threads.$add({
      username: userService.getUser().password.email,
      title: title
    })
    $scope.newThreadTitle = '';
    $scope.username = '';
  }

})
