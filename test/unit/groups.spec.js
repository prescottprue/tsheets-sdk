/* global describe, it, beforeEach, nock, expect */
import { apiUrl, defaultStartDate } from '../../src/config'
import { today } from '../../src/utils'
import { groups } from '../../src'

describe('groups', () => {
  it('is an object', () => {
    expect(groups).to.be.an.object
  })
  describe('get', () => {
    beforeEach(() =>
      nock(`${apiUrl}`)
        .get('/groups')
        .query({'start_date': defaultStartDate, 'end_date': today()})
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(groups).to.respondTo('get')
    })
    it('calls tsheets GET endpoint', () =>
      groups
        .get()
        .should.eventually.have.property('results')
    )
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
