// var myApp = angular.module('myApp', ['ngRoute']);

myApp.factory('customerFactory', function($http) {
	var customers = [];
        var factory = {};
    factory.getCustomers = function (callback){
                // pass the students to a callback to be used by whoever calls the method
       
        $http.get('/customers').success(function(output) { // /customers is pointing to routes even though in the direction of getting data from db not going through route. Route already have res initiated and it is holding it
        // console.log(output);
        customers= output;
        callback(customers);
    })
    }
    factory.addCustomer = function (data, callback) {
        data.created_date=new Date();
        data.created_date = data.created_date.toDateString();
        // console.log(data);
        $http.post('/add_customer/', data).success(function(output) { 
            // console.log(data);
             customers.push(data);
        })
            // console.log(info);
           
            callback(customers);
            
    }
    factory.removeCustomer = function (data, callback) {
        // console.log(data);
        $http.post('/remove_customer/' + data).success(function(output) { 
            // console.log('successfully removed');
            callback(customers);
        })
        
    }
    return factory;
});        