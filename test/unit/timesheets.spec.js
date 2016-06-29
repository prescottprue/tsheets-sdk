/* global describe, it, beforeEach, expect, nock */
import { apiUrl, defaultStartDate } from '../../src/config'
import { today } from '../../src/utils'
import { timesheets } from '../../src'

describe('timesheets', () => {
  it('is a function', () => {
    expect(timesheets).to.be.an.object
  })
  describe('get', () => {
    beforeEach(() =>
      nock(`${apiUrl}`)
        .get('/timesheets')
        .query({'start_date': defaultStartDate, 'end_date': today()})
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(timesheets).to.respondTo('get')
    })
    it('calls endpoint', () =>
      timesheets
        .get()
        .should.eventually.have.property('results')
    )
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
