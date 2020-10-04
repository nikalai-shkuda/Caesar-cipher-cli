const fs = require('fs');
const { Transform } = require('stream');
const { caesarCipher } = require('./caesarCipher');

const streamInput = input => {
  if (input) {
    return fs.createReadStream(input);
  }
  console.log('Please, enter text: ');
  return process.stdin;
};

const streamOutput = output => {
  if (output) {
    return fs.createWriteStream(output, {
      flags: 'a',
      emitClose: true,
    });
  }
  console.log('Encoding text: ');
  return process.stdout;
};

class StreamEncode extends Transform {
  constructor(options) {
    super (options)

    this.shift = options.shift;
    this.type = options.type;
  }

  _transform (chunk, _, callback) {
    const currentShift = this.type === 'encode'
      ? this.shift
      : (26 - this.shift) % 26;

    const result = caesarCipher(chunk, currentShift);
    this.push(result);
    callback();
  }
};

module.exports = {
  streamInput,
  streamOutput,
  StreamEncode,
};