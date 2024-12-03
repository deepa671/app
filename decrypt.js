
const crypto = require('crypto');
const fs = require('fs');

const decrypt = (filePath, password) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    const decipher = crypto.createDecipher('aes-256-cbc', password);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    fs.writeFileSync(filePath.replace('.enc', ''), decrypted);
};

module.exports = decrypt;
