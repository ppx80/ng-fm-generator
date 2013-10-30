angular.module('app', [])
  .config(['$routeProvider','$httpProvider', function ($routeProvider,$httpProvider) {

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

angular.module('app', [])
  .controller('MainCtrl', ['$scope', function ($scope) {
    

    $scope.login = function(){

      //$scope.authError = null;

    // Try to login
    security.login($scope.username, $scope.password, $scope.tenant).then(function(loggedIn) {
      if ( !loggedIn ) {
        // If we get here then the login failed due to bad credentials
        console.log('Errore di autenticazione');
      }
    }, function(x) {
      // If we get here then there was a problem with the login request to the server
      console.log('login.error.serverError', { exception: x });
    });

    }

  }]);