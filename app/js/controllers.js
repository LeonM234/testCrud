;(function() {
  "use strict";

  angular.module('ourApp')
    .controller('ChristmasController', function($http, $routeParams){
      var vm = this;
      var id = $routeParams.id;
      var url = "https://testcrud.firebaseio.com/wishes.json";
      var ref = new Firebase("https://testcrud.firebaseio.com/")

    //  vm.getList = function(){
        $http.get(url)
          .success(function(data){
            vm.wishes = data;
          })
      //}
    })
    .controller('LoginController', function($http, $location){
      var vm = this;
      var ref = new Firebase("https://testcrud.firebaseio.com/")

      vm.login = function(){
        ref.authWithPassword({
          email    : vm.email,
          password : vm.password
        }, function(error, authData) {
          if (error) {
            console.log("Authenticated VERY UN-successfully with payload:", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        });
      }

    })
}());
