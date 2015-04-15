myApp.factory('ordersFactory', function($http) {
     var factory = {};
    var orders=[];

    factory.get_orders = function(callback) {
                // console.log('receiving post orders', callback);
       $http.get('/get_orders').success(function(output) {
            // console.log(output);
            orders =output;
            callback(orders);
        })
   }
    factory.add_order = function(data, callback) {
        // console.log('to factory', data);
        data.date=new Date();
        data.date=data.date.toDateString();
        $http.post('/add_order', data).success(function(output) { 
        // console.log(data);
        orders.push(data);
        })
        callback(orders);
    }
    // most important step: return the object so it can be used by the rest of our angular code
    return factory;
});