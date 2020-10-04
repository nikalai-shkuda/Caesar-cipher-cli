const caesarCipher = (chunk, shift) => {
  for (let i = 0; i < chunk.length; i++) {
    if (chunk[i] >= 65 && chunk[i] <=  90) {
      chunk[i] = (chunk[i] - 65 + +shift) % 26 + 65;
    }
    if (chunk[i] >= 97 && chunk[i] <= 122) {
      chunk[i] = (chunk[i] - 97 + +shift) % 26 + 97;
    }
  }
  return chunk
}

module.exports = {
  caesarCipher,
};