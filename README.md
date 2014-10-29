# Analog Device for Intel Edison

This is an analog device for use in the Zetta platform on Edison

## Installation

`npm install zetta-analog-edison-driver`

## Usage

To use simply call the `use()` function in your code to use this device.

```javascript
var zetta = require('zetta');
var Analog = require('zetta-analog-edison-driver');

zetta()
  .use(Analog, 0)
  .listen(1337);
```
