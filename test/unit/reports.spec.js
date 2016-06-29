/* global describe, it, beforeEach, expect, nock */
import { apiUrl, defaultStartDate } from '../../src/config'
import { today } from '../../src/utils'
import { reports } from '../../src'

describe('reports', () => {
  it('exists', () => {
    expect(reports).to.be.an.object
  })
  describe('getPayrollReport method', () => {
    beforeEach(() =>
      nock(`${apiUrl}/reports`)
        .post('/payroll', { data: { 'start_date': defaultStartDate, 'end_date': today() } })
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
        .getPayrollReport()
        .should.eventually.exist
    )
  })
  describe('getProjectReport method', () => {
    beforeEach(() =>
      nock(`${apiUrl}/reports`)
        .post('/project', { data: { 'start_date': defaultStartDate, 'end_date': today() } })
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
        .getProjectReport()
        .should.eventually.exist
    )
  })
  describe('getCurrentTotalsReport method', () => {
    beforeEach(() =>
      nock(`${apiUrl}/reports`)
        .post('/currentTotals', { data: { 'start_date': defaultStartDate, 'end_date': today() } })
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
        .getCurrentTotalsReport()
        .should.eventually.exist
    )
  })
})
