myApp.controller('ordersController', function ($scope, ordersFactory, customerFactory) {
    customerFactory.getCustomers(function (data){
        $scope.customers = data;
   
    })
    ordersFactory.get_orders(function (data) {
        // console.log(data);
        $scope.orders = data;
    })
      
    $scope.new_order = function (){
        // console.log($scope.newOrder);
        ordersFactory.add_order($scope.newOrder, function(data) {
          ordersFactory.get_orders(function (data) {
            $scope.newOrder = {};
            $scope.orders=data;
            $scope.newOrder ='';
        })
    })
    }
});