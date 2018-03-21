angular.module('starter')
.service('vibrate', function() {
  var scope = this;
  scope.vibrate = function (){
    navigator.vibrate(2000);
  }
});
