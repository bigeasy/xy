#!/usr/bin/env node

require('proof')(2, function (equal) {
    var hilbert = require('../..'), res
    res = hilbert.d2xy(16, 2)
    equal(res[0], 4)
    equal(res[1], 0)
})
