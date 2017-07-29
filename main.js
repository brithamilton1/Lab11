var app = angular.module('angularDemo', ['ngRoute']);

app.controller('SimpleController', function($scope){s
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',
        {
          controller: 'SimpleController',
          templateUrl: 'home.html'
        })
.when('/2',
      {
        controller: 'SimpleController',
        templateUrl: 'cat.html'
      })
    .when('/3',
      {
        controller: 'SimpleController',
        templateUrl: 'dog.html'
      })
      .when('/4',
        {
          controller: 'SimpleController',
          templateUrl: 'giraffe.html'
        })
        .when('/5',
          {
            controller: 'SimpleController',
            templateUrl: 'sloth.html'
          })
            // .otherwise({redirectTo: '/'}); to direct back to the homepage
      .otherwise({template: "<h1> 404 not found </h1>"});


      $locationProvider.hashPrefix('');

    });
