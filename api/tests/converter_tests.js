/* eslint no-undef: 0 */

import { expect } from 'chai'
import convert from '../src/converter'

describe('convert()', function () {
  it('should return a if value is 2', function () {
    // 1. ARRANGE
    let value = 2

    // 2. ACT
    let actual = convert(value)

    // 3. ASSERT
    let expected = 'a'
    expect(actual).to.be.equal(expected)
  })

  it('should return b if value is not 2', function () {
    // 1. ARRANGE
    let value = false

    // 2. ACT
    let actual = convert(value)

    // 3. ASSERT
    let expected = 'b'
    expect(actual).to.be.equal(expected)
  })
})
