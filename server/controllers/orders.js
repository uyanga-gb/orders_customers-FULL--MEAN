var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
  return {
    show: function(req, res) {
 	 Order.find({}, function(err, results) {
    if(err) {
      console.log(err);
    } else {
      // console.log(results);
      res.json(results);
    }
 	})
	},	 
  add: function(req, res) { //receiving request from routes with req parameter 
  	// console.log(req.body);
    var new_order = new Order({customer_name: req.body.customer_name, name: req.body.item, quantity: req.body.quantity, date: req.body.date}); // when received req, it will create instance  model from Friend model with req.body.info which is originally from view and transfered all the way through
  	 // console.log(new_order);
    new_order.save(function(err, response) { //then after creating instance, it is saving it to database using model, but with err parameter. 
  		if(err)
  		{
  			console.log('product is not found');
  		}
  		else {
  			res.json(response); // if no err we will get response and send as a json data named as repsonse
  		}
  	})
  }

}
})();