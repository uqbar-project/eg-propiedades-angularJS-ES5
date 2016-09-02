angular.module('booking-app')
.config(function($stateProvider) {
  return $stateProvider
  .state('main.dashboard', {
    url: "/",
    templateUrl: "app/modules/dashboard/dashboard.html"
  });
});