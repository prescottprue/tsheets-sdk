import TSheets from '../../src'
const library = new TSheets()
/* global describe, it, expect */
describe('tsheets-sdk', () => {
  describe('default export', () => {
    it('exports a class function', () => {
      expect(TSheets).to.be.a.function
    })
    it('has groups parameter', () => {
      expect(library).to.have.property('groups')
    })
    it('has jobcodes parameter', () => {
      expect(library).to.have.property('jobcodes')
    })
    it('has timesheets parameter', () => {
      expect(library).to.have.property('timesheets')
    })
    it('has users parameter', () => {
      expect(library).to.have.property('users')
    })
  })
})
