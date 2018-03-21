angular.module('starter')
.service('api', function($http, $q) {
	console.log('init service API');
	var deferred = $q.defer();

	var scope = this;
	// scope.url  = "http://demoapi.mmi-lepuy.fr/avamac/web/app_dev.php";
    scope.url = "http://46.101.17.27/fetch_contact.php";
    scope.getUser	= function () {
		//var data = {"mail":mail}

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
