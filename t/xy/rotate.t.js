require('proof')(9, prove)

function prove (assert) {
    var n = 0xaa
    var bitwise = require('../../bitwise')
    var bits = bitwise.bits
    assert(bits(n, 8), '10101010', 'bits formatting')
    assert(bits(bitwise.rotateLeft(n, 5, 0, 2), 8), '10101001', 'rotate 5 bits left 2')
    assert(bits(bitwise.rotateLeft(n, 5, 0, 1), 8), '10110100', 'rotate 5 bits left 1')
    assert(bits(bitwise.rotateLeft(n, 5, 1, 2), 8), '10101100', 'rotate 5 bits offset 1 left 2')
    assert(bits(bitwise.rotateLeft(n, 3, 2, 1), 8), '10110010', 'rotate 3 bits offset 2 left 1')
    assert(bits(bitwise.rotateRight(n, 5, 0, 2), 8), '10110010', 'rotate 5 bits right 2')
    assert(bits(bitwise.rotateRight(n, 5, 0, 1), 8), '10100101', 'rotate 5 bits right 1')
    assert(bits(bitwise.rotateRight(n, 5, 1, 2), 8), '10011010', 'rotate 5 bits offset 1 right 2')
    assert(bits(bitwise.rotateRight(n, 3, 2, 1), 8), '10100110', 'rotate 3 bits offset 2 right 1')
}
