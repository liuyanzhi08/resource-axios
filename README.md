# resource-axios

[![npm version](https://img.shields.io/npm/v/resource-axios.svg?style=flat-square)](https://www.npmjs.org/package/resource-axios)
[![build status](https://img.shields.io/travis/liuyanzhi08/resource-axios.svg?style=flat-square)](https://travis-ci.org/liuyanzhi08/resource-axios)
[![code coverage](https://img.shields.io/coveralls/liuyanzhi08/resource-axios.svg?style=flat-square)](https://coveralls.io/r/liuyanzhi08/resource-axios)
[![npm downloads](https://img.shields.io/npm/dm/resource-axios.svg?style=flat-square)](http://npm-stat.com/charts.html?package=resource-axios)
[![code helpers](https://www.codetriage.com/liuyanzhi08/resource-axios/badges/users.svg)](https://www.codetriage.com/liuyanzhi08/resource-axios)

Create vue-resource's resource like object. Restful methods, interceptors support.

## Installation

```bash
npm i -S resource-axios
npm i -S axios
```

## Usage

```javascript
import resource from 'resource-axios';
import axios from 'axios';

const Book = resource('/api/books', axios);

// get book of id:1 =>  curl '/api/books/1'
Book.get(1).then(res => console.log(res));
Book.get({ id: 1 }).then(res => console.log(res));
Book.get({ _id: 1 }).then(res => console.log(res));

// query books name:foo => curl '/api/books?name=foo'
Book.query({ name: 'foo' }).then(res => console.log(res));

// add book of id:1 => curl -H "Content-Type:application/json" -X POST --data '{"name":"foo"}' /api/books
Book.save({ name: 'foo' }).then(res => console.log(res));
Book.post({ name: 'foo' }).then(res => console.log(res));

// update book of id:1 => curl -H "Content-Type:application/json" -X PUT --data '{"name":"foo"}' /api/books/1
Book.update(1, { name: 'foo' }).then(res => console.log(res));
Book.update({ id: 1, name: 'foo' }).then(res => console.log(res));
Book.update(1, { name: 'foo' }).then(res => console.log(res));
Book.update({ id: 1, name: 'foo' }).then(res => console.log(res));

// delete book of id:1 => curl -X DELETE /api/books/1
Book.delete(1).then(res => console.log(res));
Book.delete({ id: 1 }).then(res => console.log(res));
```

## Customize actions

Axios doc: [axios-api](https://github.com/axios/axios#axios-api)

```javascript
import resource from 'resource-axios';
import axios from 'axios';

const Book = resource('/api/books', {
  sell: (id) => axios.get('/api/books/${id}/sell'),
}, axios);

// sell book of id:1 => curl /api/books/1/sell
Book.sell(1).then(res => console.log(res));
```

## Interceptors

Axios doc: [interceptors](https://github.com/axios/axios#interceptors)

```javascript
import resource from 'resource-axios';
import axios from 'axios';

const Book = resource('/api/books', axios);
// const Book = resource('/api/books', { /* customized actions */ }, axios);

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  console.log(config);
  return config;
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
  console.log(response);
  return response;
});

// get book of id:1 =>  curl '/api/books/1'
Book.get(1);
```

## Changelog
version | log
------------ | -------------
v1.2.0 | support more params format; params error will be throw out; add post and put methods [changelog](https://github.com/liuyanzhi08/resource-axios/wiki/change-log-v1.2.0)
v1.1.2 | add notice when axios is not imported
v1.1.1 | refactoring codes
v1.1.0 |  remove axios self-injecting. [changelog](https://github.com/liuyanzhi08/resource-axios/wiki/change-log-v1.1.0)
v1.0.16 | fix [issue#1](https://github.com/liuyanzhi08/resource-axios/issues/1)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, liuyanzhi08
