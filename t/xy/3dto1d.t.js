#!/usr/bin/env node

require('proof')(1, function (deepEqual) {
  var hilbert = require('../..')

  deepEqual(hilbert.d2xyz(8, 16), [16, 2, 2])
})
