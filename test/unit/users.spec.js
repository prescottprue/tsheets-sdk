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
  describe('add', () => {
    it('exists', () => {
      expect(users()).to.respondTo('add')
    })
  })
  describe('remove', () => {
    it('exists', () => {
      expect(users()).to.respondTo('remove')
    })
  })
  describe('update', () => {
    it('exists', () => {
      expect(users()).to.respondTo('update')
    })
  })
})
