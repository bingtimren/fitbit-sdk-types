import * as fs from 'fs';
let file = fs.openSync('filename.bin', 'w+');
let buffer = new ArrayBuffer(3);
let bytes = new Uint8Array(buffer);
bytes[0] = 1;
bytes[1] = 2;
bytes[2] = 3;
let bytes_written = fs.writeSync(file, buffer);
console.log('bytes written: ', bytes_written);
fs.closeSync(file);
