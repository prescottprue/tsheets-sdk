/* global describe, it, expect */
import { reports } from '../../src'

describe('reports', () => {
  it('exists', () => {
    expect(reports).to.be.a.function
  })
  describe('getPayrollReport method', () => {
    it('exists', () => {
      expect(reports()).to.respondTo('getPayrollReport')
    })
  })
  describe('getProjectReport method', () => {
    it('exists', () => {
      expect(reports()).to.respondTo('getProjectReport')
    })
  })
  describe('getCurrentTotalsReport method', () => {
    it('exists', () => {
      expect(reports()).to.respondTo('getCurrentTotalsReport')
    })
  })
})
