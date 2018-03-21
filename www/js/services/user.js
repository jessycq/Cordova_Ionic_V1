
angular.module('starter')
.service('user', function($http) {
  console.log('init service USER');
  var scope = this;
  var login = null;
  var password = null;
  scope.login = function (loginInit, passwordInit) {
    login = loginInit;
    password = passwordInit;
  }

  scope.getCurrentUser = function () {
    var user = {
      username : login,
      password : password
    };
    console.log(user);
    return user;
  }

  scope.checkLoginMdp = function(log) {
    var login = log.username;
    var mdp = log.mdp;
    console.log("init");
    $http.get("data/users.json")
    .then(function (rep) {
      rep.data.users.forEach(function(item){
        if (item.username == login && item.mdp == mdp) {
          console.log("success");
          sessionStorage.setItem("username",item.username);
          sessionStorage.setItem("mdp",item.mdp);
        }else {
          console.log("fail");
        }
      });
      console.log(rep.data.users);
    }, function (data){
      console.log(data);
    });
  }

});
