'use strict';

app.factory('GroupDelService',  ['$http', function($http) {
  var promise;
  var GroupDelService = {  
  async: function(item){  
      if(!promise || promise){
        promise = $http({
          method: 'post',
          url: 'ajax.php',
          data: $.param({'id' : item.id, 'type' : 'delete_group'}),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).
        success(function(data, status, headers, config) {
          if(data.success){
            console.log(data);
            return data.data;           
          }else{
            alert("error mode - data success");
            console.log(data);
          }
        });
      }
    return promise;
    }
  };
  return GroupDelService;
}]);