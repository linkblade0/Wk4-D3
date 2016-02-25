angular.module('rtfmApp')
.controller('threadIdCtrl', function($scope, threadRef, $firebaseObject, commentsRef, $firebaseArray, userService){

  var thread = $firebaseObject(threadRef);
  thread.$bindTo($scope, 'thread');

  $scope.comments = $firebaseArray(commentsRef);

  $scope.createComment = function(text) {
    $scope.comments.$add({
      username: userService.getUser().password.email,
      text: text
    })
    $scope.newCommentText = '';
    $scope.username = '';
  }
})
