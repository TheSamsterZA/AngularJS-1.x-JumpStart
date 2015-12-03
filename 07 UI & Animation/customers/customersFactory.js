(function() {
  var factories = angular.module('app').factories;

  factories.customersFactory = function() {
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

    return {
      getCustomers: function() {
        return customers;
      },
      getCustomer: function(customerId) {
        for (var i = 0; i < customers.length; i++) {
          if (customers[i].id === customerId) {
            return customers[i];
          }
        }
        return {}; // If we don't find a match
      }
    }
  };

  /* Alternative syntax for factory definition
  factories.customersFactory = function() {
    var customers = null;
    var factory = {};
    factory.getCustomers = function() {
      return customers;
    };
    return factory;
  };
  */

  angular.module('app') // Reference module
    .factory(factories);

}()); // Self-invoked anonymous function; prevents polluting global namespace
