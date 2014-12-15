;(function() {
  "use strict";

  angular.module('ourApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: "views/form.html",
        controller: "ChristmasController" ,
        controllerAs: "xmasCtrl"
      })
      .when('/wishes', {
        templateUrl: "views/table.html",
        controller: "ChristmasController",
        controllerAs: "xmasCtrl"
      })
    })
}());
