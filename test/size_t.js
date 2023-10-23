'use strict'

const assert = require('assert')
const struct = require('../index')

describe('test size_t', () => {
  it('test r/w', () => {
    const a = new struct.ssize_t()
    const b = new struct.size_t()

    a.$value = 100
    b.$value = 100

    assert.equal(a.$value.toString(10), '100')
    assert.equal(b.$value.toString(10), '100')
  })

  it('test negative', () => {
    const a = new struct.ssize_t()
    const b = new struct.size_t()

    a.$value = -1
    b.$value = -1
    assert.equal(a.$value.toString(10), '-1')
    assert.equal(b.$value.toString(10), (0xffffffff).toString(10))

    a.$value = 0xffffffff
    b.$value = 0xffffffff
    assert.equal(a.$value.toString(10), '-1')
    assert.equal(b.$value.toString(10), (0xffffffff).toString(10))
  })

  it('test buffer', () => {
    const a = new struct.ssize_t()
    const b = new struct.size_t()

    a.$value = -1
    b.$value = 12345678

    assert.equal(Buffer.compare(
      a.$buffer,
      Buffer.from('ffffffff', 'hex')
    ), 0)
    assert.equal(Buffer.compare(
      b.$buffer,
      Buffer.from('4e61bc00', 'hex')
    ), 0)
  })
})
