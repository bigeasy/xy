#!/usr/bin/env node

require('proof')(1, function (equal( {
  var hilbert = require('../..')

  equal(hilbert.convertDistanceToPoint(16, 2), [1, 1])
}
