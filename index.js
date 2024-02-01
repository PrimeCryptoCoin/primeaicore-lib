'use strict';

var primeaicore = module.exports;

// module information
primeaicore.version = 'v' + require('./package.json').version;
primeaicore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of primeaicore-lib found. ' +
      'Please make sure to require primeaicore-lib and check that submodules do' +
      ' not also include their own primeaicore-lib dependency.';
    throw new Error(message);
  }
};
primeaicore.versionGuard(global._primeaicore);
global._primeaicore = primeaicore.version;

// crypto
primeaicore.crypto = {};
primeaicore.crypto.BN = require('./lib/crypto/bn');
primeaicore.crypto.ECDSA = require('./lib/crypto/ecdsa');
primeaicore.crypto.Hash = require('./lib/crypto/hash');
primeaicore.crypto.Random = require('./lib/crypto/random');
primeaicore.crypto.Point = require('./lib/crypto/point');
primeaicore.crypto.Signature = require('./lib/crypto/signature');

// encoding
primeaicore.encoding = {};
primeaicore.encoding.Base58 = require('./lib/encoding/base58');
primeaicore.encoding.Base58Check = require('./lib/encoding/base58check');
primeaicore.encoding.BufferReader = require('./lib/encoding/bufferreader');
primeaicore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
primeaicore.encoding.Varint = require('./lib/encoding/varint');

// utilities
primeaicore.util = {};
primeaicore.util.buffer = require('./lib/util/buffer');
primeaicore.util.js = require('./lib/util/js');
primeaicore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
primeaicore.errors = require('./lib/errors');

// main primeaicoin library
primeaicore.Address = require('./lib/address');
primeaicore.Block = require('./lib/block');
primeaicore.MerkleBlock = require('./lib/block/merkleblock');
primeaicore.BlockHeader = require('./lib/block/blockheader');
primeaicore.HDPrivateKey = require('./lib/hdprivatekey.js');
primeaicore.HDPublicKey = require('./lib/hdpublickey.js');
primeaicore.Networks = require('./lib/networks');
primeaicore.Opcode = require('./lib/opcode');
primeaicore.PrivateKey = require('./lib/privatekey');
primeaicore.PublicKey = require('./lib/publickey');
primeaicore.Script = require('./lib/script');
primeaicore.Transaction = require('./lib/transaction');
primeaicore.URI = require('./lib/uri');
primeaicore.Unit = require('./lib/unit');

// dependencies, subject to change
primeaicore.deps = {};
primeaicore.deps.bnjs = require('bn.js');
primeaicore.deps.bs58 = require('bs58');
primeaicore.deps.Buffer = Buffer;
primeaicore.deps.elliptic = require('elliptic');
primeaicore.deps.nodeX16r = require('node-x16r');
primeaicore.deps.nodeX16rV2 = require('node-x16rv2');
primeaicore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
primeaicore.Transaction.sighash = require('./lib/transaction/sighash');
