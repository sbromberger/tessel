// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);

function log(msg) {
  console.log('x:', msg[0].toFixed(2),
    'y:', msg[1].toFixed(2),
    'z:', msg[2].toFixed(2));
}
// Initialize the accelerometer.
accel.on('ready', function () {
  console.log(accel.availableOutputRates());
  accel.setOutputRate(1.56, function rateSet() {
      accel.on('data', function (xyz) {
        console.log('slower x:', xyz[0].toFixed(2),
        'slower y:', xyz[1].toFixed(2),
        'slower z:', xyz[2].toFixed(2));
      });
    });
});

accel.on('error', function(err){
  console.log('Error:', err);
});
