var app = angular.module('angularDemo', ['ngRoute']);

app.controller('SimpleController', function($scope){s
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
.when('/',
      {
        controller: 'SimpleController',
        templateUrl: 'cat.html'
      })
    .when('/2',
      {
        controller: 'SimpleController',
        templateUrl: 'dog.html'
      })
      .otherwise({redirectTo: '/'});

      $locationProvider.hashPrefix('');

    });
