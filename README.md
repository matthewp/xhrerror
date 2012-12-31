# XhrError

A generic Error object for use when performing XHR requests. XHR component writers are encouraged to use this Error object to signal errors / incomplete requests.

## Installation

**XhrError** is a [component](https://github.com/component/component).

    $ component install matthewp/xhrerror

## Usage

XhrError is a tiny object that serves 1 purpose, to signal an error in an XHR requests.

    var XhrError = require('xhrerror');

    function doAjaxyRequest(url, callback) {

      ...
      // Oops, there was an error.
      var err = new XhrError("Oops, couldn't find that.", 404);
      callback(err);
    }

## Dependencies

None.