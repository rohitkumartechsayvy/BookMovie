'use strict';

var app = require('angular').module('mastMovieApp');
app.controller('OMDBController', require('./omdbcontroller'));
app.controller('MainController', require('./mycontroller'));
app.controller('MapController', require('./movieMapping'));
app.controller('BookNowController',require('./bookNow'));
app.controller('SelectSeatController',require('./seatSelectController'));
// app.controller('BookNowController',require('./bookNow'));
app.controller('PaymentController',require('./paymentController'));
app.controller('AdminController',require('./adminController'));
app.controller('ConfirmationController',require('./confrimation'));
// app.controller('SelectShowBooking',require('./selectShowBookingController'));
