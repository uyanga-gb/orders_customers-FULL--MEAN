 myApp.controller('customersController', function ($scope, customerFactory){
            // console.log('hi');
    // $scope.customers = [];
        // run the getCustomers method and set $scope data in the callback
    customerFactory.getCustomers(function (data){
        // console.log(data);
        $scope.customers = data;
        
    })
    $scope.addCustomer = function (){
        // console.log($scope.newCustomer);
        customerFactory.addCustomer($scope.newCustomer, function(data) {
        // console.log($scope.newCustomer);
        $scope.newCustomer = {};
        // FriendFactory.getFriends(function(data) {
        $scope.customers=data;
        // console.log($scope.customers);
        $scope.newCustomer ='';
        })
    // })
    }
        
    $scope.removeCustomer = function (customer){
    //  indexOf() calculates the index of the item whose value matches what we pass it.  Look it up
      // $scope.customers.splice($scope.customers.indexOf(customer), 1);
       // console.log(customer._id);
      customerFactory.removeCustomer(customer._id, function(data) {
        customerFactory.getCustomers(function (data){
            $scope.customers = data;
        // console.log($scope.customer);
      });
    })
  }
});   