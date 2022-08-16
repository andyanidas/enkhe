const crypto = require('crypto'),
  hash = crypto.getHashes();
var input_str = 'I am converting string to hash.';

hashPwd = crypto.createHash('sha256').update(input_str).digest('hex');

console.log('Input String: ' + input_str);
console.log('Hash Value: ' + hashPwd);
