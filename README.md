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

## API

### XhrError(message, status)

Create a new ``XhrError``. Optionally provide a ``message`` string and the ``status`` code.

### XhrError#status

The status code returned from the XHR attempt.

### XhrError#message

Inheriting from ``Error#message``, the string message for the error.

### XhrError#stack

Inheriting from ``Error#stack``, the stack trace from which the XhrError was created.

## Dependencies

None.