const validationArgs = (type, shift) => {
  if (!type || !shift) {
    console.log(`Error, you didn't enter required param - ${type ? '' : 'action'} ${shift ? '' : 'shift'}\nStatus code: 1`)
    return false;
  }

  if (!['encode', 'decode'].includes(type)) {
    console.log(`Error, you entered the wrong command - ${type}, here is a list of supported commands: encode, decode\nStatus code: 1`)
    return false;
  }
  return true
};
  
module.exports = {
  validationArgs,
};