'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    //default controller
  controller('AppCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
  }).
  controller('loginCtrl', function($scope, $http){
        $scope.submit= function() {
            if($scope.userName && $scope.password) {
                $http({
                    method: 'POST',
                    url: 'http://localhost:8389/api/v1/login',
                    data: { 'userName' : $scope.userName, 'password' : $scope.password}
                }).
                success(function (data, status, headers, config) {
                    console.log("login success");
                    //make sure you generate the session at app side(populate some sort of token)
                    window.location = '/home';
                }).
                error(function (data, status, headers, config) {
                    console.log("login failed");
                    window.location = '/home';
                    alert("you are not authorized still redirecting!!");
                });
            }
        }
   }).
  controller('dataCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: '/api/data'
    }).
        success(function (data, status, headers, config) {
          $scope.data = data.data;
        }).
        error(function (data, status, headers, config) {
          $scope.data = 'Error!';
        });
  });