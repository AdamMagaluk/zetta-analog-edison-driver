var Scout = require('zetta-scout');
var util = require('util');
var Analog = require('./analog');
var pins = [];

var AnalogScout = module.exports = function() {
  this.pins =  Array.prototype.slice.call(arguments);
  Scout.call(this);
}
util.inherits(AnalogScout, Scout);

AnalogScout.prototype.init = function(next) {
  var self = this;

  this.pins.forEach(function(pin) {
    self.discover(Analog, pin);
  });
  next();
};
