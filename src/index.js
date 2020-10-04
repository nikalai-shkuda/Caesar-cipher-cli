const { pipeline } = require('stream');
const { getParams } = require('./params');
const { streamInput, streamOutput, StreamEncode } = require('./streams');
const { exit } = require('./exit');
const { validationArgs } = require('./validation');

try {
  const { input, output, shift, type } = getParams();

  if (!validationArgs(type, shift)) return;

  pipeline(
    streamInput(input),
    new StreamEncode({ shift, type }),
    streamOutput(output),
    err => {
      if (err) {
        exit(err);
        process.exit(err.statusCode);
      }
      console.log(`${type} was successful`);
    }
  );
} catch (err) {
  exit(err);
  process.exit(err.statusCode);
}