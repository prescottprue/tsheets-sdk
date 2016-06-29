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

## Usage

#### ES6
```js
// Top level import
import TSheets from 'tsheets-sdk'
// or destructured
import { reports, timesheets, groups, jobcodes } from 'tsheets-sdk'
```

## API

### Reports

#### `reports.getPayrollReport(params)`

Retrieves a payroll report, with filters to narrow down the results.

**Example**

```js
import { reports } from 'tsheets-sdk'
reports().getPayrollReport()
  .then(report => console.log('report:', report))
  .catch(error => console.error('error getting report:', error))
```

**Params**

| Parameter  | Description                                      | Type     | Required |
|------------|--------------------------------------------------|----------|----------|
| start_date | `YYYY-MM-DD` for the starting date.              | string   | Yes      |
| end_date   | `YYYY-MM-DD` for the end date.                   | string   | No       |
| user_ids   | Array of TSheets user IDs to get time for.       | number[] | No       |
| page       | Page number for timesheets (max 50 per page).    | number   | No       |

#### `reports.getProjectReport(params)`

Retrieves a project report, with filters to narrow down the results.

**Example**

```js
import { reports } from 'tsheets-sdk'
reports().getProjectReport()
  .then(report => console.log('report:', report))
  .catch(error => console.error('error getting report:', error))
```

**Params**

| Parameter  | Description                                      | Type     | Required |
|------------|--------------------------------------------------|----------|----------|
| start_date | `YYYY-MM-DD` for the starting date.              | string   | Yes      |
| end_date   | `YYYY-MM-DD` for the end date.                   | string   | No       |
| user_ids   | Array of TSheets user IDs to get time for.       | number[] | No       |
| page       | Page number for timesheets (max 50 per page).    | number   | No       |

#### `reports.getCurrentTotalsReport(params)`

Retrieves a current totals report, with filters to narrow down the results.

**Example**

```js
import { reports } from 'tsheets-sdk'
reports().getCurrentTotalsReport()
  .then(report => console.log('report:', report))
  .catch(error => console.error('error getting report:', error))
```

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

**Example**

```js

import { timesheets } from 'tsheets-sdk'
// Can be imported from top level as well
// import Tsheets from 'tsheets-sdk'
// const { timesheets } = Tsheets

timesheets().get()
  .then(report => console.log('timesheets:', timesheets))
  .catch(error => console.error('error getting timesheets:', error))
```

**Params**

| Parameter  | Description                                      | Type     | Required |
|------------|--------------------------------------------------|----------|----------|
| start_date | `YYYY-MM-DD` for the starting date.              | string   | Yes      |
| end_date   | `YYYY-MM-DD` for the end date.                   | string   | Yes      |
| user_ids   | Array of TSheets user IDs to get timesheets for. | number[] | No       |
| page       | Page number for timesheets (max 50 per page).    | number   | No       |

### Jobcodes

#### `jobcodes.get(params)`

Gets jobcodes for the specified user(s) for the provided time period.

**Example**

```js
import { reports } from 'tsheets-sdk'
jobcodes().get()
  .then(report => console.log('jobcodes:', jobcodes))
  .catch(error => console.error('error getting jobcodes:', error))
```

**Params**

| Parameter  | Description                                      | Type     | Required |
|------------|--------------------------------------------------|----------|----------|
| start_date | `YYYY-MM-DD` for the starting date.              | string   | Yes      |
| end_date   | `YYYY-MM-DD` for the end date.                   | string   | Yes      |
| user_ids   | Array of TSheets user IDs to get jobcodes for. | number[] | No       |
| page       | Page number for jobcodes (max 50 per page).    | number   | No       |

### Users

#### `users.get(params)`

Gets users for the specified id(s).

**Example**

```js
import { reports } from 'tsheets-sdk'
users().get()
  .then(report => console.log('users:', users))
  .catch(error => console.error('error getting users:', error))
```

**Params**

| Parameter  | Description                                      | Type     | Required |
|------------|--------------------------------------------------|----------|----------|
| start_date | `YYYY-MM-DD` for the starting date.              | string   | Yes      |
| end_date   | `YYYY-MM-DD` for the end date.                   | string   | Yes      |
| user_ids   | Array of TSheets user IDs to get users for. | number[] | No       |
| page       | Page number for users (max 50 per page).    | number   | No       |


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
[coverage-image]: https://img.shields.io/codecov/c/github/prescottprue/gitsearch.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/prescottprue/tsheets-sdk
[license-image]: https://img.shields.io/npm/l/tsheets-sdk.svg?style=flat-square
[license-url]: https://github.com/prescottprue/tsheets-sdk/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
