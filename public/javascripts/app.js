'use strict';

var app = angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ngRoute'
]);

app.config(function ($routeProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: '/partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: '/partials/partial2',
      controller: 'MyCtrl2'
    }).
    when('/data', {
        templateUrl: '/partials/data',
        controller: 'dataCtrl'
      }).
    when('/register', {
        templateUrl: '/partials/register',
        controller: 'onlyView'
      }).
    when('/login', {
        templateUrl: '/partials/login',
      }).
    when('/home', {
      templateUrl: '/partials/home',
    }).
    otherwise({
      redirectTo: '/home'
    });
});

