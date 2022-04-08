var express = require('express');
var routes = require('./routes/omdbroute');
var bodyParser = require('body-parser');
var routes1 = require('./routes/myroute');
var routes2 = require('./routes/bookingDetailsRoute');
var movieMapRoute=require('./routes/movieMappingroute');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/api', routes); //using routes
app.use('/theater', routes1);
app.use('/mt_map', movieMapRoute);
app.use('/pay', routes2);
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');
  var config = require('./webpack.config');
  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",
    headers: { "X-Custom-Webpack-Header": "yes" },
    stats: {
      colors: true
    }
  }));
}

app.listen(8000,function(){
  console.log('Server is running on port 8000');
});
