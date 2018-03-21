angular.module('starter')
.service('flash', function() {
  var scope = this;
  scope.toggle = function (){
    window.plugins.flashlight.toggle(
      function() {}, // optional success callback
      function() {}, // optional error callback
      {intensity: 0.3} // optional as well, used on iOS when switching on
    );
  }
  scope.off = function (){
    window.plugins.flashlight.switchOff();
  }
});
