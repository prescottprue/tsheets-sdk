/* global describe, it, expect */
import { timesheets } from '../../src'

describe('timesheets', () => {
  it('is a function', () => {
    expect(timesheets).to.be.a.function
  })
  describe('get', () => {
    it('exists', () => {
      expect(timesheets()).to.respondTo('get')
    })
  })
})
