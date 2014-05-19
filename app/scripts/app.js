'use strict';

angular
  .module('quizApp', [
    'ngResource',
    'ngRoute',
    'Quiz.factories'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
