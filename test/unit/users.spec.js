/* global describe, it, expect */
import { users } from '../../src'

describe('users', () => {
  it('is a function', () => {
    expect(users).to.be.a.function
  })
  describe('get', () => {
    it('exists', () => {
      expect(users()).to.respondTo('get')
    })
  })
})
