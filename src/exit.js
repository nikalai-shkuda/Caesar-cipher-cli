const exit = error => {
  process.on('exit', () => process.stderr.write(`${error.message}.\nStatus code: 1`));
};
  
module.exports = {
  exit,
};