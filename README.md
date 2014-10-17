# LED Device for Intel Edison

This is a LED device for use in the Zetta platform on Beaglebone

##Installation

`npm install zetta-led-edison-driver`

##Usage

To use simply call the `use()` function in your code to use this device.

```javascript
var zetta = require('zetta');
var LEDs = require('zetta-led-edison-driver');

zetta()
  .use(LEDs, 13)
  .listen(1337, function(){
    console.log('Zetta is running at http://localhost:1337');
  });
```
