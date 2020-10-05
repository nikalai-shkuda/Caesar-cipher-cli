const { pipeline } = require('stream');
const { getParams } = require('./params');
const { streamInput, streamOutput, StreamEncode } = require('./streams');
const { validationArgs } = require('./validation');

try {
  const { action, input, output, shift } = getParams();

  if (!validationArgs(action, shift)) return;

  const read = streamInput(input);
  const transform = new StreamEncode({ shift, action });
  const write = streamOutput(output);

  pipeline(
    read,
    transform,
    write,
    err => {
      if (err) {
        console.error(`${err.message}.\nStatus code: 1`);
        process.exit(1);
      }
      console.log(`${action} was successful`);
    }
  );
} catch (err) {
  console.error(`${err.message}.\nStatus code: 1`);
  process.exit(1);
}