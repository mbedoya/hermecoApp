angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
    $scope.$on('$ionicView.enter', function (e) {
      $rootScope.gaPlugin.trackPage(function () { }, function () { }, "Dashboard Page");
    });
  })

  .controller('ChatsCtrl', function ($scope, $rootScope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    /*
    window.ga.trackView('Chats');
    window.ga.trackEvent('Page', 'Start', 'Chat');
    */

    $scope.$on('$ionicView.enter', function (e) {
      $rootScope.gaPlugin.trackPage(function () { }, function () { }, "Chat Page");
    });

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.$on('$ionicView.enter', function (e) {
      $rootScope.gaPlugin.trackPage(function () { }, function () { }, "Chat Detail Page");
    });
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.$on('$ionicView.enter', function (e) {
      $rootScope.gaPlugin.trackPage(function () { }, function () { }, "Account Page");
    });
    $scope.settings = {
      enableFriends: true
    };
    $scope.tomarFoto1 = function () {

      navigator.camera.getPicture(function success(uri) {
        console.log("success");
      }, function error(err) {
        console.log(err);

      },
        {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        }
      );


    }

    $scope.tomarFoto2 = function () {

      plugins.imagePicker.getPictures(
        function (results) {
          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
          }
        }, function (error) {
          console.log('Error: ' + error);
        }
      );

    }
  });
