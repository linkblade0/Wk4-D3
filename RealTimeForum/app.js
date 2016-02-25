angular.module('rtfmApp', ['ui.router', 'firebase'])
.constant('fb', {
  url: 'https://rtforumproject.firebaseio.com/'
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login')

  $stateProvider
    .state('threads', {
      url: '/threads',
      templateUrl: 'views/threads.html',
      controller: 'threadsCtrl',
      resolve: {
        threadsRef: function(threadService) {
          return threadService.getThreads();
        }
      }
    })

    .state('thread', {
      url: '/threads/:threadId',
      templateUrl: 'views/threadId.html',
      controller: 'threadIdCtrl',
      resolve: {
        threadRef: function(threadService, $stateParams) {
          return threadService.getThread($stateParams.threadId);
        },
        commentsRef: function(threadService, $stateParams) {
          return threadService.getComments($stateParams.threadId);
        }
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'loginCtrl'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'signupCtrl'
    })

    .state('logout', {
      url: '/logout',
      controller: function(userService) {
        return userService.logout();
      }
    })
})
