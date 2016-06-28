/* global describe, it, expect */
import { timesheets } from '../../src'

describe('timesheets', () => {
  it('is a function', () => {
    expect(timesheets).to.be.an.object
  })
  describe('get', () => {
    it('exists', () => {
      expect(timesheets).to.respondTo('get')
    })
  })
  describe('add', () => {
    it('exists', () => {
      expect(timesheets).to.respondTo('add')
    })
  })
  describe('remove', () => {
    it('exists', () => {
      expect(timesheets).to.respondTo('remove')
    })
  })
  describe('update', () => {
    it('exists', () => {
      expect(timesheets).to.respondTo('update')
    })
  })
})
