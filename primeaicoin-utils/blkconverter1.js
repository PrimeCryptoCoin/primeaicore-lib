'use strict';

// execution
// enable rest in primeai.conf 'rest=1' (be sure to disable after)
// node ./primeaicoin-utils/blkconverter1.js

// convert block json from primeaid format to primeaicore format

// get ./primeaicoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.hex | xxd -r -p > ./primeaicoin-utils/inputs/blk1.dat

// get ./primeaicoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.json > ./primeaicoin-utils/inputs/blk1.json

// get ./primeaicoin-utils/inputs/blk1.js by manually edit the file

// Manually check if blk1-primeaicore.json match with blk1.json

var primeaicore = require('..');
var Block = primeaicore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('primeaicoin-utils/inputs/blk1.dat');

var primeaicoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(primeaicoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('primeaicoin-utils/outputs/blk1-primeaicore.dat', primeaicoreFormatBlockBuffer);
fs.writeFileSync('primeaicoin-utils/outputs/blk1-primeaicore.json', blkJSONStr);
