/* global describe, it, beforeEach, expect, nock */
import { apiUrl, defaultStartDate } from '../../src/config'
import { reports } from '../../src'

describe('reports', () => {
  it('exists', () => {
    expect(reports).to.be.an.object
  })
  describe('getPayrollReport method', () => {
    beforeEach(() =>
      nock(`${apiUrl}/reports`)
        .post('/payroll', { data: { 'start_date': defaultStartDate } })
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(reports).to.respondTo('getPayrollReport')
    })
    it('calls tsheets POST endpoint', () =>
      reports
        .getPayrollReport({ start_date: defaultStartDate })
        .should.eventually.exist
    )
  })
  describe('getProjectReport method', () => {
    beforeEach(() =>
      nock(`${apiUrl}/reports`)
        .post('/project', { data: { 'start_date': defaultStartDate } })
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(reports).to.respondTo('getProjectReport')
    })
    it('calls tsheets POST endpoint', () =>
      reports
        .getProjectReport({ start_date: defaultStartDate })
        .should.eventually.exist
    )
  })
  describe('getCurrentTotalsReport method', () => {
    beforeEach(() =>
      nock(`${apiUrl}/reports`)
        .post('/current_totals', { data: { group_ids: [] } })
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(reports).to.respondTo('getCurrentTotalsReport')
    })
    it('calls tsheets POST endpoint', () =>
      reports
        .getCurrentTotalsReport({ group_ids: [] })
        .should.eventually.exist
    )
  })
})
