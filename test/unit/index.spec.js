import TSheets from '../../src'
const library = new TSheets()
/* global describe, it, expect */
describe('tsheets-sdk', () => {
  describe('default export', () => {
    it('exports a class function', () => {
      expect(TSheets).to.be.a.function
    })
    it('has groups parameter', () => {
      expect(library).to.respondTo('groups')
    })
    it('has jobcodes parameter', () => {
      expect(library).to.respondTo('jobcodes')
    })
    it('has timesheets parameter', () => {
      expect(library).to.respondTo('timesheets')
    })
    it('has users parameter', () => {
      expect(library).to.respondTo('users')
    })
  })
})
