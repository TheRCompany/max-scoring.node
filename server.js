var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  var routes = require('./api/routes/boards'); //importing route
  routes(app); //register the route

app.listen(port);

console.log('Application started on port: ' + port);