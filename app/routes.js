'use strict';

angular.module('booking-app', ['ui.router'])
.config(function($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  return $locationProvider.html5Mode(true);
})
.run(function($state){});

angular.module('booking-app')
.config(function($stateProvider) {
  return $stateProvider
  .state('dashboard', {
    url: "/",
    templateUrl: "app/modules/dashboard/dashboard.html",
    controller: "DashboardCtrl",
    controllerAs:"dashboardCtrl"
  });
});