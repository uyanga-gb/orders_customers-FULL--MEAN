var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    show: function(req, res) {
 	 Customer.find({}, function(err, results) {
    if(err) {
      console.log(err);
    } else {
      // console.log('getting customer from db', results);
      res.json(results);
    }
 	})
	},	 
  add: function(req, res) { //receiving request from routes with req parameter 
  	// console.log(req.body.created_date);
    var new_customer = new Customer({name: req.body.name, created_date: req.body.created_date});
    
    // console.log(new_customer);
    // console.log('in the server side controller', new_customer); // when received req, it will create instance  model from Friend model with req.body.info which is originally from view and transfered all the way through
  	new_customer.save(function(err, response) { //then after creating instance, it is saving it to database using model, but with err parameter. 
  		if(err)
  		{
  			console.log('Customer is not found');
  		}
  		else {
  			res.json(response); // if no err we will get response and send as a json data named as repsonse
  		}
  	})
  },
  remove: function(req, res) {
    Customer.remove({_id: req.params.id}, function(err, response) {
      if(err) {
      console.log(err);
    } else {
      // console.log('getting customer from db', results);
      res.json(response);
    }
    })
    }
    // console.log(req);
}
})();