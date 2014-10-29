var zetta = require('zetta');
var Analog = require('../index');

zetta()
  .use(Analog, 0)
  .listen(1337);
