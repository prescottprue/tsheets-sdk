/* global describe, it, beforeEach, expect, nock */
import { apiUrl, defaultStartDate } from '../../src/config'
import { jobcodes } from '../../src'

describe('jobcodes', () => {
  it('exists', () => {
    expect(jobcodes).to.be.an.object
  })
  describe('get method', () => {
    beforeEach(() =>
      nock(`${apiUrl}`)
        .get('/jobcodes')
        .query({ 'start_date': defaultStartDate })
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(jobcodes).to.respondTo('get')
    })
    it('calls tsheets GET endpoint', () =>
      jobcodes
        .get({ start_date: defaultStartDate })
        .should.eventually.have.property('results')
    )
    it.skip('throws with null input', () =>
      expect(jobcodes.get.bind(jobcodes, null)).to.throw('Report query object required')
    )
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
