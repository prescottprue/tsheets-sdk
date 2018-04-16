const chai = global.chai = require('chai')
const expect = global.expect = chai.expect
const should = global.should = chai.should()
const nock = global.nock = require('nock')
const chaiAsPromised = require('chai-as-promised')

process.env.TSHEETS_TOKEN = 'test'

chai.use(chaiAsPromised)
