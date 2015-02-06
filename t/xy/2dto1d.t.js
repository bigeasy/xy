#!/usr/bin/env node

require('proof')(1, function (assert) {
    var hilbert = require('../..')

    //equal(hilbert.xy2d(4, 0, 2), 16)
    assert(hilbert.xy2d(16, 2, 2), 8)
})
