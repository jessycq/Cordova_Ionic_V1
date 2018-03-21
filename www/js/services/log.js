angular.module('starter')
.service('log', function($http, $q) {
	console.log('init service LOG');
	var deferred = $q.defer();

	var scope = this;
  scope.url = "http://46.101.17.27/fetch_contact.php";
  scope.getUser	= function () {

	$http.post(scope.url, null,{
		headers : {
			'Content-Type' : 'application/json;charset=utf-8;'
		}
	})
	.success(function(rep, status){
    console.log(rep);
		deferred.resolve(rep);
	}).error(function(err, status){
		deferred.reject(err);
	});
	return deferred.promise;
  }
});
