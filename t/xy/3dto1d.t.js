#!/usr/bin/env node

require('proof')(1, function (equal) {
  var hilbert = require('../..')

  equal(hilbert.d2xyz(8, 16), [16, 2, 2])
})
