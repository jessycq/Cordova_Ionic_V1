angular.module('starter')

.controller('AppCtrl', function($scope, $ionicModal, $timeout, user, modal) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  var myModal = modal;
  myModal.initialize($scope, "templates/login.html");
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    // $scope.username = "<center><h3>Bienvenue "+$scope.loginData.username+"</h3></center>";
    // vive la sécurité !
    // $scope.mdp = $scope.loginData.password;
    $timeout(function() {
      myModal.hide();
      console.log($scope.loginData);
      user.checkLoginMdp($scope.loginData);
    }, 1000);
  };

  $scope.login = function() {
    myModal.show();
  };

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
