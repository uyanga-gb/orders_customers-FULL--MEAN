var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');
 
module.exports = function(app) {
    app.get('/customers', function(req, res) { // eventough when it is direction to database which is only req, it initiate res which is object and empty but required
      customers.show(req, res);
    });
    app.post('/remove_customer/:id', function(req, res) { // eventough when it is direction to database which is only req, it initiate res which is object and empty but required
      // console.log(req);
      customers.remove(req, res);
    });
    app.post('/add_customer', function(req, res) { // receiving http request from factory sending req to backend's controller called friends and find add method 
  	// console.log(req.body);
  	customers.add(req, res);
  })
    app.get('/', function(req, res) {
      res.render('../client/index');
    })
    app.get('/get_orders', function(req, res) { // eventough when it is direction to database which is only req, it initiate res which is object and empty but required
      orders.show(req, res);
    });
    app.post('/add_order', function(req, res) { // receiving http request from factory sending req to backend's controller called friends and find add method 
    // console.log(req.body);
    orders.add(req, res);
  })
  }
