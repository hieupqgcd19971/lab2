const fs = require('fs');
fs.unlink('copyfile.txt', (err) => {
if (err) {
throw err;
}
console.log('File deleted!');
});