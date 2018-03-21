angular.module('starter')
.controller('flashCtrl', function($scope, flash) {
  $scope.toggle = function() {
    flash.toggle();
  }
});
