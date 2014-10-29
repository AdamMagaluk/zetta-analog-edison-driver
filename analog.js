var Device = require('zetta-device');
var util = require('util');
var mraa = require('mraa-js');

var Analog = module.exports = function(pin) {
  Device.call(this);
  this.pin = pin;
  this._pin = new mraa.Aio(this.pin);
};
util.inherits(Analog, Device);

Analog.prototype.init = function(config) {
  config
    .type('analog')
    .name('analog ' + this.pin)
    .monitor('value');

  var self = this;
  setInterval(function(){
    self.value = self._pin.read();
  }, 100);
};
