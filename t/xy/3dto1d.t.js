#!/usr/bin/env node

require('proof')(1, function (assert) {
    var hilbert = require('../..')

    assert(hilbert.d2xyz(8, 16), [16, 2, 2])
})
