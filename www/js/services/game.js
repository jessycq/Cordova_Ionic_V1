angular.module('starter')
.service('myGame', function() {
  var scope = this;
  scope.count = 0;
  // Variable utile pour la boucle de mouvement
  var orientationX = 0.3; // Valeur de déplacement (0.3 "px" par défaut)
  var orientationY = 0.3; // Valeur de déplacement (0.3 "px" par défaut)
  var timing = 1000/150; // x images par seconde ("150" par défaut ici)

  scope.scoreUp = function (){
    scope.count += 1;
    // console.log(scope.count);
    if (orientationX < 0 ) {
      orientationX -= 0.1;
    } else {
      orientationX += 0.1;
    }
    if (orientationY < 0 ) {
      orientationY -= 0.1;
    } else {
      orientationY += 0.1;
    }
  };
  scope.getScore = function(){
    return scope.count;
  }
  scope.reset = function(){
    scope.count = 0;

    console.log("testin");
    console.log(scope.count);
    return scope.count;
  };

  scope.rebondsAutomatiques = function () {
    // Variable générale
    var z = $('#zoneAuto'); // Zone
    var el = $('#rebondAuto'); // Elément à déplacer

    // Enregistrement des dimensions de l'élément à déplacer
    var hauteurElement = el.height();
    var largeurElement = el.width();

    // Enregistrement des dimensions de la zone
    var hauteurZone = z.outerHeight();
    var largeurZone = z.outerWidth();

    // Epaisseur de la bordure de zone
    var bordureZone = 3;

    // "Quadrillage" en pixel (pour savoir où sont les bordures)
    var pixelHaut = z.offset().top;
    var pixelGauche = z.offset().left;
    var pixelBas = (pixelHaut + hauteurZone) - (hauteurElement + bordureZone);
    var pixelDroite = (pixelGauche + largeurZone) - (largeurElement + bordureZone);



    // Boucle pour créer le mouvement
    var boucle = setInterval(function() {
      // Pixels occupés par l'élément à déplacer
      var offsetHaut = el.offset().top;
      var offsetGauche = el.offset().left;
      var offsetBas = offsetHaut + hauteurElement;
      var offsetDroite = offsetGauche + largeurElement;

      // Sens d'animation gauche-droite (rebonds)
      if(parseInt(offsetGauche) >= pixelDroite+1 || parseInt(offsetGauche) <= pixelGauche+1) {
        orientationX *= -1;
      }
      // Sens d'animation haut-bas (rebonds)
      if(parseInt(offsetHaut) >= pixelBas+1 || parseInt(offsetHaut) <= pixelHaut+1) {
        orientationY *= -1;
      }

      // Nouvelles positions pour l'élément
      position = el.offset({
        left:offsetGauche + orientationX,
        top:offsetHaut + orientationY
      });
    }, timing);
  }
})
