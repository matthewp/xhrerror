function XhrError(message, status, request) {
  Error.call(this);

  this.name = 'XhrError';
  this.message = message;
  this.status = status;
  this.request = request;
}

XhrError.prototype = Object.create(Error.prototype);

module.exports = XhrError;