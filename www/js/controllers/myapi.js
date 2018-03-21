angular.module('starter')
.controller('apiCtrl', function($scope, api) {
  /**
   * then est utilisé pour récupérer les paramètres de la promise !! IMPORTANT !!
   */
   $scope.contacts= api.getUser().then(function(data) {
     $scope.contacts = data;
   }, function(msg) {
     alert(msg);
   });

})
