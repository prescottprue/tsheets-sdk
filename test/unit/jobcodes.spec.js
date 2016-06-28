/* global describe, it, expect */
import { jobcodes } from '../../src'

describe('jobcodes', () => {
  it('exists', () => {
    expect(jobcodes).to.be.an.object
  })
  describe('get method', () => {
    it('exists', () => {
      expect(jobcodes).to.respondTo('get')
    })
  })
  describe('add', () => {
    it('exists', () => {
      expect(jobcodes).to.respondTo('add')
    })
  })
  describe('remove', () => {
    it('exists', () => {
      expect(jobcodes).to.respondTo('remove')
    })
  })
  describe('update', () => {
    it('exists', () => {
      expect(jobcodes).to.respondTo('update')
    })
  })
})
