# resource-axios [![Build Status][travis-img]][travis]

[travis-img]: https://travis-ci.org/rollup/rollup-plugin-commonjs.svg
[travis]: https://travis-ci.org/rollup/rollup-plugin-commonjs

Create vue-resource's resource like object

## Installation

```bash
npm install --save-dev resource-axios
```


## Usage

```javascript
import resource from 'resource-axios';
const Book = resource('/api/books');

// add book of id:1 => curl -H "Content-Type:application/json" -X POST --data '{"name":"foo"}' /api/books
Book.save(1, {name: 'foo'}).then(res => console.log(res));

// delete book of id:1 => curl -X DELETE /api/books/1
Book.delete(1).then(res => console.log(res));

// update book of id:1 => curl -H "Content-Type:application/json" -X PUT --data '{"name":"foo"}' /api/books/1
Book.update(1, {name: 'foo'}).then(res => console.log(res));

// get book of id:1 =>  curl '/api/books/1'
Book.get(1).then(res => console.log(res));

// query books name:foo => curl '/api/books?name=foo'
Book.query({ name: 'foo' }).then(res => console.log(res));
```