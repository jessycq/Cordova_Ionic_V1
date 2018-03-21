angular.module('starter')
.controller('localStorageCtrl', function($scope) {
  $scope.title = "LocalStorage";
  /**
   * [Création du tableau en javascript classique]
   * @type {tableau}
   */
  var monobjet  = {
    dev1 : "Jessy",
    dev2 : "Rintsu",
    dev3 : "Chips"
  };
  /**
   * [Transfromation du tableau en objet JSON]
   * @type {[JSON]}
   */
  var monobjet_json = JSON.stringify(monobjet);
  /**
   * Ajout de l'élément JSON dans le sessionStorage
   */
  sessionStorage.setItem("objet",monobjet_json);

  var monobjet_json = sessionStorage.getItem("objet");
  var monobjet = JSON.parse(monobjet_json);
  // Affichage dans la console
  console.log(monobjet);
  $scope.objet = monobjet;

});
