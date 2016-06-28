/* global describe, it, expect */
import { groups } from '../../src'

describe('groups', () => {
  it('is an object', () => {
    expect(groups).to.be.an.object
  })
  describe('get', () => {
    it('exists', () => {
      expect(groups).to.respondTo('get')
    })
  })
  describe('add', () => {
    it('exists', () => {
      expect(groups).to.respondTo('add')
    })
  })
  describe('remove', () => {
    it('exists', () => {
      expect(groups).to.respondTo('remove')
    })
  })
  describe('update', () => {
    it('exists', () => {
      expect(groups).to.respondTo('update')
    })
  })
})
