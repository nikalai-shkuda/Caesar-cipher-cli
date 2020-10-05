const { program } = require('commander');

program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false);

program
  .option('-a, --action <string>', 'an action encode/decode')
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <string>', 'an input file')
  .option('-o, --output <string>', 'an output file')  
  .parse(process.argv);

  
module.exports = {
  getParams: () => program.opts(),
};