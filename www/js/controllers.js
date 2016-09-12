angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    window.ga.trackView('Dash');
    window.ga.trackEvent('Page', 'Start', 'Dash');
})

.controller('ChatsCtrl', function($scope, $rootScope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  window.ga.trackView('Chats');
  window.ga.trackEvent('Page', 'Start', 'Chat');

  $rootScope.gaPlugin.trackPage( function(){}, function(){}, "Chat Page");

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  window.ga.trackView('ChatDetail');
  window.ga.trackEvent('Page', 'Start', 'ChatDetail');
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  window.ga.trackView('Account');
  window.ga.trackEvent('Page', 'Start', 'Account');
  $scope.settings = {
    enableFriends: true
  };
});
