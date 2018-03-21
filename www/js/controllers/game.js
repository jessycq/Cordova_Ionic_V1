angular.module('starter')
  .controller('gameCtrl', function($scope, myGame, $state) {
    $scope.title = "Game";

    $scope.$on("$stateChangeSuccess",function(event, toState, toParams, fromState, fromParams){
      if (toState.name == "app.game") {
        myGame.reset();
      }
    });
  })
  .controller('playCtrl', function($scope, myGame, $window) {
    $scope.title = "Play";

    $scope.myGame = myGame;
    myGame.rebondsAutomatiques();

    $scope.win = function() {
      $scope.count++;
      myGame.scoreUp();
    }
    $scope.loose = function (){
      $window.location.href = "#/app/endGame";
    };
  })
  /**
   * Double data binding
   * @param  {[type]} $scope [description]
   * @param  {[type]} myGame [description]
   * @return {[type]}        [description]
   */
  .controller('endGameCtrl', function($scope, myGame) {
    $scope.title = "Fin du jeu !";
    $scope.myGame = myGame;
  });
