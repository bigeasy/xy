#!/usr/bin/env node

require('proof')(1, function (equal) {
  var hilbert = require('../..')

  equal(hilbert.convertPointToDistance(16, 2, 2), 8)
})
