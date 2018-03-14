/* global describe, it, beforeEach, expect, nock */
import { apiUrl, defaultStartDate } from '../../src/config'
import { timesheets } from '../../src'

describe('timesheets', () => {
  it('is a function', () => {
    expect(timesheets).to.be.an.function
  })
  describe('get', () => {
    beforeEach(() =>
      nock(`${apiUrl}`)
        .get('/timesheets')
        .query({'start_date': defaultStartDate})
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(timesheets()).to.respondTo('get')
    })
    it('calls endpoint', () =>
      timesheets()
        .get({'start_date': defaultStartDate})
        .should.eventually.have.property('results')
    )
    it.skip('throws without query', () =>
      expect(timesheets().get.bind(timesheets, null)).to.throw('Object with query parameters required to get timesheets')
    )
  })
  describe('add', () => {
    it('exists', () => {
      expect(timesheets()).to.respondTo('add')
    })
  })
  describe('remove', () => {
    it('exists', () => {
      expect(timesheets()).to.respondTo('remove')
    })
  })
  describe('update', () => {
    it('exists', () => {
      expect(timesheets()).to.respondTo('update')
    })
  })
})
