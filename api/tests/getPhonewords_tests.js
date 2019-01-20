/* eslint no-undef: 0 */

import { expect } from 'chai'
import getPhonewords from '../src/getPhonewords'

describe('getPhonewords()', function () {
  it('should return a if value is 2', function () {
    // 1. ARRANGE
    let value = '2'

    // 2. ACT
    let actual = getPhonewords(value)

    // 3. ASSERT
    let expected = 'a'
    expect(actual[0]).to.be.equal(expected)
  })

  it('should return [] if value is not English word', function () {
    // 1. ARRANGE
    let value = '5432'

    // 2. ACT
    let actual = getPhonewords(value)

    // 3. ASSERT
    let expected = 0
    expect(actual.length).to.be.equal(expected)
  })
})
