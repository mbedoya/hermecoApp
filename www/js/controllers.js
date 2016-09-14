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

  .controller('AccountCtrl', function ($scope, $rootScope) {

    $scope.$on('$ionicView.enter', function (e) {
      $rootScope.gaPlugin.trackPage(function () { }, function () { }, "Account Page");
    });

    $scope.settings = {
      enableFriends: true
    };

    $scope.getFileContentAsBase64 = function(path, callback){

      window.resolveLocalFileSystemURL(path, gotFile, fail);

      function fail(e) {
        alert('Cannot found requested file');
      }

      function gotFile(fileEntry) {
        fileEntry.file(function (file) {
          var reader = new FileReader();
          reader.onloadend = function (e) {
            var content = this.result;
            callback(content);
          };
          // The most important point, use the readAsDatURL Method from the file plugin
          reader.readAsDataURL(file);
        });
      }
    }

    $scope.tomarFoto1 = function () {

      navigator.camera.getPicture(function success(uri) {
        $scope.img1 = uri;
        $scope.$apply();
      }, function error(err) {
        console.log(err);

      },
        {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: false
        }
      );


    }

    $scope.tomarFoto2 = function () {

      plugins.imagePicker.getPictures(

        function (results) {

          var filePath = "";

          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            $scope.img2 = results[i];
            $scope.$apply();
          }

          filePath = $scope.img2;
          $scope.getFileContentAsBase64(filePath, function(base64Image){
            /*
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + base64Image;
            */

            $scope.base64 = "data:image/jpeg;base64," + base64Image;
            $scope.$apply();
          });

        },function (error) {
          console.log('Error: ' + error);
        }
      );

    }
  });
