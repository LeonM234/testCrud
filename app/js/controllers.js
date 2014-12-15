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

}());
