const Clock = require('./clock');

class ExtendedClock extends Clock {
  constructor(arg) {
    super(arg);
    let { precision = 1000 } = arg;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

const timer = new ExtendedClock({ template: 'h:m:s', precision: 1000 });

timer.start();
