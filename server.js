var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/api/customers/:id', function(req, res) {
  var customerId = parseInt(req.params.id);
  var data = {};
  for (var i = 0; i < customers.length; i++) {
    if (customers[i].id === customerId) {
      data = customers[i];
      break;
    }
  }
  res.json(data);
});

app.get('/api/customers', function(req, res) {
  res.json(customers);
  //res.json(500, {error: 'An error has occurred!'});
});

app.get('/api/orders', function(req, res) {
  var orders = [];
  for (var i = 0; i < customers.length; i++) {
    if (customers[i].orders) {
      for (var j = 0; j < customers[i].orders.length; j++) {
        orders.push(customers[i].orders[j]);
      }
    }
  }
  res.json(orders);
});

app.delete('/api/customers/:id', function(req, res) {
  var customerId = parseInt(req.params.id);
  var data = { status: false };
  for (var i = 0; i < customers.length; i++) {
    if (customers[i].id === customerId) {
      customers.splice(i, 1);
      data = { status: true };
      break;
    }
  }
  res.json(data);
});

app.listen(8888, 'localhost');

var customers = [
  {
    id: 1, name: 'Sam', city: 'New York', orderTotal: 99.8732, joined: '2000-12-02',
    orders: [{id: 1, product: 'Shoes', total: 9.99}]
  },
  {
    id: 2, name: 'Retard', city: 'Chicago', orderTotal: 327.1784, joined: '2007-04-26',
    orders: [{id: 2, product: 'Ball', total: 7.49}, {id: 3, product: 'Bat', total: 12.39}]
  },
  {
    id: 3, name: 'Karusha', city: 'Atlanta', orderTotal: 5.2, joined: '2012-07-14',
    orders: [{id: 1, product: 'Shoes', total: 35.00}, {id: 4, product: 'Cap', total: 43.74}]
  },
  {
    id: 4, name: 'Sadhika', city: 'California', orderTotal: 452.946, joined: '2008-01-04',
    orders: [{id: 3, product: 'Bat', total: 17.82}]
  },
];
