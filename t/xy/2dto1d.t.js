#!/usr/bin/env node

require('proof')(1, function (equal) {
  var hilbert = require('../..')

  equal(hilbert.xy2d(4, 0, 2), 16)
})
