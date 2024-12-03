
const encrypt = require('./encrypt');
const decrypt = require('./decrypt');
const fs = require('fs');

const filePath = 'example.txt';
const password = 'securekey123';

// Example content
fs.writeFileSync(filePath, 'This is a secure file.');

// Encrypt the file
encrypt(filePath, password);
console.log(`File encrypted: ${filePath}.enc`);

// Decrypt the file
decrypt(`${filePath}.enc`, password);
console.log('File decrypted.');
