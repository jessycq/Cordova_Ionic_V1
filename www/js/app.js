// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic'])

.run(function($ionicPlatform, flash) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleBlackOpaque();
    }
    document.addEventListener("pause", onPause, false);
    cordova.plugins.notification.badge.set(10);
  });
  function onPause(){
    flash.off();
  }

  // function onConfirm(buttonIndex) {
  //   alert('You selected button ' + buttonIndex);
  // }
  //
  // navigator.notification.confirm(
  //   'You are the winner!', // message
  //   onConfirm,            // callback to invoke with index of button pressed
  //   'Game Over',           // title
  //   ['Restart','Exit']     // buttonLabels
  // );
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.details', {
    url: '/details/:username',
    views: {
      'menuContent': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      }
    }
  })
  .state('app.demo', {
    url: '/accueil',
    views: {
      'menuContent': {
        templateUrl: 'templates/accueil.html',
        controller: 'homeCtrl'
      }
    }
  })
  .state('app.localStorage', {
    url: '/localStorage',
    views: {
      'menuContent': {
        templateUrl: 'templates/localStorage.html',
        controller: 'localStorageCtrl'
      }
    }
  })
  .state('app.api', {
    url: '/myapi',
    views: {
      'menuContent': {
        templateUrl: 'templates/myapi.html',
        controller: 'apiCtrl'
      }
    }
  })
  .state('app.game', {
    url: '/game',
    views: {
      'menuContent': {
        templateUrl: 'templates/game.html',
        controller: 'gameCtrl'
      }
    }
  })
  .state('play', {
    url: '/app/play',
    controller: 'playCtrl',
    templateUrl: 'templates/play.html'
  })
  .state('app.endGame', {
    url: '/endGame',
    views: {
      'menuContent': {
        templateUrl: 'templates/endGame.html',
        controller: 'endGameCtrl'
      }
    }
  })
  .state('app.flashlight', {
    url: '/flashlight',
    views: {
      'menuContent': {
        templateUrl: 'templates/flashlight.html',
        controller: 'flashCtrl'
      }
    }
  })
  .state('app.vibrate', {
    url: '/vibrate',
    views: {
      'menuContent': {
        templateUrl: 'templates/vibrate.html',
        controller: 'vibrateCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/accueil');
});
