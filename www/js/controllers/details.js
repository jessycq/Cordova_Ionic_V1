angular.module('starter')
  .controller('detailsCtrl',
  function($scope ,$stateParams, $ionicLoading) {
    $scope.title = "Informations";
    $ionicLoading.show({
      template: 'Chargement...',
      duration: 1000
    });
    $scope.username = $stateParams.username;
    // $ionicLoading.hide();
  });
