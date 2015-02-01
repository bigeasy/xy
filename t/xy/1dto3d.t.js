#!/usr/bin/env node

require('proof')(1, function (assert) {
    var hilbert = require('../..')

    assert(hilbert.xyz2d(16, 2, 2), 8)
})
