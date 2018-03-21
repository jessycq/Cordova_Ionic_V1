angular.module('starter')
.controller('homeCtrl', function($window, $scope, user) {
   $scope.title = "Accueil";
   $scope.user= user.getCurrentUser();
   if (sessionStorage.username) {
     $scope.username = sessionStorage.username;
     /**
     * [Fonctions réagissant au clic d'un bouton]
     * @return {[html]} [description]
     */
     $scope.clickPositive = function (){
       $scope.html = "<center><h3>Positive</h3></center>";
     };
     $scope.clickCalm = function (){
       $scope.html = "<center><h3>Calm</h3></center>";
     };
     $scope.clickDark = function (){
       $scope.html = "<center><h3>Dark</h3></center>";
     };
   } else {

   }
});
