/* global describe, beforeEach, nock, it, expect */
import { users } from '../../src'
import { apiUrl, defaultStartDate } from '../../src/config'
import { today } from '../../src/utils'

describe('users', () => {
  it('is a function', () => {
    expect(users).to.be.an.object
  })
  describe('get', () => {
    beforeEach(() =>
      nock(`${apiUrl}`)
        .get('/users')
        .query({'start_date': defaultStartDate, 'end_date': today()})
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(users).to.respondTo('get')
    })
    it('calls tsheets GET endpoint', () =>
      users
        .get()
        .should.eventually.have.property('results')
    )
  })
  describe('add', () => {
    it('exists', () => {
      expect(users).to.respondTo('add')
    })
  })
  describe('remove', () => {
    it('exists', () => {
      expect(users).to.respondTo('remove')
    })
  })
  describe('update', () => {
    it('exists', () => {
      expect(users).to.respondTo('update')
    })
  })
})
