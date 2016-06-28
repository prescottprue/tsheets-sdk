/* global describe, it, expect */
import { groups } from '../../src'

describe('groups', () => {
  it('is a function', () => {
    expect(groups).to.be.a.function
  })
  describe('get', () => {
    it('exists', () => {
      expect(groups()).to.respondTo('get')
    })
  })
})
