#!/usr/bin/env node

require('proof')(3, function (assert) {
    var hilbert = require('../..')

    console.log("Point (5,6) " + hilbert.hilbert(2, 5, 6) + " above ^^^ \n")
    console.log("Point (0,0) " + hilbert.hilbert(2, 0, 0) + " above ^^^ \n")
    console.log("Point (0,1) " + hilbert.hilbert(2, 0, 1) + " above ^^^ \n")
    console.log("Point (1,1) " + hilbert.hilbert(2, 1, 1) + " above ^^^ \n")
    console.log("Point (1,0) " + hilbert.hilbert(2, 1, 0) + " above ^^^ \n")
    console.log("Point (0,2) " + hilbert.hilbert(2, 0, 2) + " above ^^^ \n")
    console.log("Point (0,3) " + hilbert.hilbert(2, 0, 3) + " above ^^^ \n")
    console.log("Point (1,3) " + hilbert.hilbert(2, 1, 3) + " above ^^^ \n")
    console.log("Point (1,2) " + hilbert.hilbert(2, 1, 2) + " above ^^^ \n")
    console.log("Point (2,2) " + hilbert.hilbert(2, 2, 2) + " above ^^^ \n")
    console.log("Point (2,3) " + hilbert.hilbert(2, 2, 3) + " above ^^^ \n")
    console.log("Point (3,3) " + hilbert.hilbert(2, 3, 3) + " above ^^^ \n")
    console.log("Point (3,2) " + hilbert.hilbert(2, 3, 2) + " above ^^^ \n")
    console.log("Point (3,1) " + hilbert.hilbert(2, 3, 1) + " above ^^^ \n")
    console.log("Point (2,1) " + hilbert.hilbert(2, 2, 1) + " above ^^^ \n")
    console.log("Point (2,0) " + hilbert.hilbert(2, 2, 0) + " above ^^^ \n")
    console.log("Point (3,0) " + hilbert.hilbert(2, 3, 0) + " above ^^^ \n")
})
