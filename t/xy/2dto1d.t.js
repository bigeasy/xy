#!/usr/bin/env node

require('proof')(3, function (assert) {
    var hilbert = require('../..')

    //equal(hilbert.xy2d(4, 0, 2), 16)
    assert(hilbert.xy2d(16, 2, 2), 8)
    assert(hilbert.xy2d(0, 0, 2), 0)
    assert(hilbert.xy2d(0, 1, 3), 1)
    hilbert.hilbert(2, 3, 5, 6)
})
