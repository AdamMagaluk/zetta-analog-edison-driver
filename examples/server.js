var zetta = require('zetta');
var Analog = require('../index');

zetta()
  .use(Analog, 0)
  .listen(1337, function(){
    console.log('Zetta is running at http://beaglebone.local:1337');
  });
