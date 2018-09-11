// import axios from 'axios';
// import assert from 'assert';
// import resource from '../../dist/resource-axios';
// import server from '../helpers/server';
//
//
// let API;
//
// describe('params', () => {
//   before(() => {
//     server.start();
//     API = resource('http://localhost:3000/api/book', axios);
//   });
//   after(() => {
//     server.stop();
//   });
//
//   it('[get] should accept a int id', async () => {
//     await API.get(1).then((res) => {
//       const book = res.data;
//       assert.deepEqual(book, { id: 1 });
//     });
//   });
//
//   it('[get] should accept a string id', async () => {
//     await API.get('1').then((res) => {
//       const book = res.data;
//       assert.deepEqual(book, { id: 1 });
//     });
//   });
//
//   it('[get] should accept a object which contains a id attribute', async () => {
//     await API.get({ id: 1 }).then((res) => {
//       const book = res.data;
//       assert.deepEqual(book, { id: 1 });
//     });
//   });
//
//   it('[get] should accept a object which contains a _id attribute', async () => {
//     await API.get({ id: 1 }).then((res) => {
//       const book = res.data;
//       assert.deepEqual(book, { id: 1 });
//     });
//   });
//
//   it('[get] should reject when params is not a object which dosen\'t contains a id(_id) attribute', async () => {
//     await API.get({ foo: 1 }).then(() => {
//     }, (err) => {
//       assert.deepEqual(err, { msg: '[axios-resource] get: param should be a st'});
//     });
//   });
// });
