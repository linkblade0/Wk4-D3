angular.module('rtfmApp')
.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray){

  $scope.threads = $firebaseArray(threadsRef)

  $scope.threads.$loaded().then(function(threads) {
    console.log(threads);
  })

  $scope.createThread = function(username, title) {
    console.log(username, title);
    $scope.threads.$add({
      username: username,
      title: title
    })
    $scope.newThreadTitle = '';
    $scope.username = '';
  }

})
