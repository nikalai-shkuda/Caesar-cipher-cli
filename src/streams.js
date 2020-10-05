const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const { caesarCipher } = require('./caesarCipher');

const streamInput = input => {
  if (input) {
    const inputPath = path.resolve(__dirname, input);
    return fs.createReadStream(inputPath);
  }
  console.log('Please, enter text: ');
  return process.stdin;
};

const streamOutput = output => {
  if (output) {
    const outputPath = path.resolve(__dirname, output);
    fs.accessSync(outputPath, fs.constants.F_OK | fs.constants.R_OK);
    return fs.createWriteStream(outputPath, {
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

    this.action = options.action;
    this.shift = options.shift;
  }

  _transform (chunk, _, callback) {
    const currentShift = this.action === 'encode'
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