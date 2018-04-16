/* global describe, it, beforeEach, nock, expect */
import { apiUrl } from '../../src/config'
import { groups } from '../../src'

describe('groups', () => {
  it('is an object', () => {
    expect(groups).to.be.an.function
  })
  describe('get', () => {
    beforeEach(() =>
      nock(`${apiUrl}`)
        .get('/groups')
        .query({group_ids: []})
        .reply(200, {
          results: {},
          'supplemental_data': {}
        })
    )
    it('exists', () => {
      expect(groups()).to.respondTo('get')
    })
    it('calls tsheets GET endpoint', () =>
      groups()
        .get({group_ids: []})
        .should.eventually.have.property('results')
    )
  })
  describe('add', () => {
    it('exists', () => {
      expect(groups()).to.respondTo('add')
    })
  })
  describe('remove', () => {
    it('exists', () => {
      expect(groups()).to.respondTo('remove')
    })
  })
  describe('update', () => {
    it('exists', () => {
      expect(groups()).to.respondTo('update')
    })
  })
})
