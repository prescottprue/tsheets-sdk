# TSheets Javascript SDK
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Climate][climate-image]][climate-url]
[![License][license-image]][license-url]
[![Code Style][code-style-image]][code-style-url]

> Simple client for full access to [TSheets REST API](http://developers.tsheets.com/docs/api/).

## Authentication
Set the environment variable `TSHEETS_TOKEN` to a TSheets access token.

## API

### `reports.getProjectReport(params)`

Retrieves a project report, with filters to narrow down the results.

**Params**

| Parameter  | Description                                      | Type     | Required |
|------------|--------------------------------------------------|----------|----------|
| start_date | `YYYY-MM-DD` for the starting date.              | string   | Yes      |
| end_date   | `YYYY-MM-DD` for the end date.                   | string   | No       |
| user_ids   | Array of TSheets user IDs to get time for.       | number[] | No       |
| page       | Page number for timesheets (max 50 per page).    | number   | No       |

### Timesheets

#### `timesheets.get(params)`

Gets timesheets for the specified user(s) for the provided time period.

**Params**

| Parameter  | Description                                      | Type     | Required |
|------------|--------------------------------------------------|----------|----------|
| start_date | `YYYY-MM-DD` for the starting date.              | string   | Yes      |
| end_date   | `YYYY-MM-DD` for the end date.                   | string   | Yes      |
| user_ids   | Array of TSheets user IDs to get timesheets for. | number[] | No       |
| page       | Page number for timesheets (max 50 per page).    | number   | No       |

## Contribution

**Note:** Make sure you set the environment variable `TSHEETS_TOKEN`  as described above or tests will not run.

1. Install dependencies: `npm install`
2. Check/Remove lint using: `npm run lint:fix`
3. Run tests using: `npm run test`
4. Create a Pull Request with your changes

## License

MIT © [Scott Prue](http://prue.io)

[npm-image]: https://img.shields.io/npm/v/tsheets-sdk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tsheets-sdk
[npm-downloads-image]: https://img.shields.io/npm/dm/tsheets-sdk.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/prescottprue/tsheets-sdk/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/prescottprue/tsheets-sdk
[daviddm-image]: https://img.shields.io/david/prescottprue/tsheets-sdk.svg?style=flat-square
[daviddm-url]: https://david-dm.org/prescottprue/tsheets-sdk
[climate-image]: https://img.shields.io/codeclimate/github/prescottprue/tsheets-sdk.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/prescottprue/tsheets-sdk
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/prescottprue/tsheets-sdk.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/prescottprue/tsheets-sdk
[license-image]: https://img.shields.io/npm/l/tsheets-sdk.svg?style=flat-square
[license-url]: https://github.com/prescottprue/tsheets-sdk/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
