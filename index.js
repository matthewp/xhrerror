function XhrError(message, status) {
  Error.call(this);

  this.name = 'XhrError';
  this.message = message;
  this.status = status;
}

XhrError.prototype = Object.create(Error.prototype);

module.exports = XhrError;