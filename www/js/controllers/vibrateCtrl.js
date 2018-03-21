angular.module('starter')
.controller('vibrateCtrl', function($scope, vibrate) {
  $scope.vibrate = function() {
    vibrate.vibrate();
  }
});
