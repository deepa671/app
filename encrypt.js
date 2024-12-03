
const crypto = require('crypto');
const fs = require('fs');

const encrypt = (filePath, password) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    const cipher = crypto.createCipher('aes-256-cbc', password);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    fs.writeFileSync(`${filePath}.enc`, encrypted);
};

module.exports = encrypt;
