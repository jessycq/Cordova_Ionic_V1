angular.module('starter')
.service('modal', function($ionicModal) {
  // // Create the login modal that we will use later
  var scope = this;

  // Triggered in the login modal to close it
  scope.initialize = function($scope, url) {
    // console.log(url);
    var that = this;
    $ionicModal.fromTemplateUrl(url, {
      scope: $scope
    }).then(function(modal) {
      that.modal = modal;
    });
  };

  // Triggered in the login modal to close it
  scope.hide = function() {
    scope.modal.hide();
  };

  // Open the login modal
  scope.show = function() {
    scope.modal.show();
  };
});
