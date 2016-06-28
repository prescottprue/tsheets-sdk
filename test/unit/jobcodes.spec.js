/* global describe, it, expect */
import { jobcodes } from '../../src'

describe('jobcodes', () => {
  it('is a function', () => {
    expect(jobcodes).to.be.a.function
  })
  describe('get', () => {
    it('exists', () => {
      expect(jobcodes()).to.respondTo('get')
    })
  })
})
