'use strict';

// execution
// enable rest in primeai.conf 'rest=1' (be sure to disable after)
// node ./primeaicoin-utils/blkconverter.js

// convert block json from primeaid format to primeaicore format

// get ./primeaicoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.hex | xxd -r -p > ./primeaicoin-utils/inputs/blk220909.dat

// get ./primeaicoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.json > ./primeaicoin-utils/inputs/blk220909.json

// get ./primeaicoin-utils/inputs/blk220909.js by manually edit the file

// Manually check if blk220909-primeaicore.json match with blk220909.json

var primeaicore = require('..');
var Block = primeaicore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('primeaicoin-utils/inputs/blk220909.dat');

var primeaicoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(primeaicoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('primeaicoin-utils/outputs/blk220909-primeaicore.dat', primeaicoreFormatBlockBuffer);
fs.writeFileSync('primeaicoin-utils/outputs/blk220909-primeaicore.json', blkJSONStr);
