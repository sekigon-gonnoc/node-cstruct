'use strict'

let instance = null

class StructConfig {
  constructor () {
    if (instance) {
      return instance
    }

    instance = this

    this.endianness = 'LE'

    this.dataSize = {
      long: 4,
      size_t: 4,
      'void *': 4
    }
  }

  set endianness (value) {
    if (value !== 'LE' && value !== 'BE') {
      throw new TypeError('Invalid endianness type')
    }

    this._endianness = value
  }

  get endianness () {
    return this._endianness
  }

  set dataSize (config) {
    this._dataSize = Object.assign({
      bool: 1,
      char: 1,
      short: 2,
      int: 4,
      long: 4,
      'long long': 8,
      float: 4,
      double: 8,
      size_t: 4,
      'void *': 4,
      int8: 1,
      int16: 2,
      int32: 4,
      int64: 8
    }, config)
  }

  get dataSize () {
    return this._dataSize
  }
}

module.exports = new StructConfig()
