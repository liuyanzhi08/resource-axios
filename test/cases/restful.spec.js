import axios from 'axios';
import chai from 'chai';
import resource from '../../dist/resource-axios';
import makeSuite from '../helpers';

const { expect } = chai;

// describe('Restful methods', () => {
//   let Baidu;
//   before(() => {
//     Baidu = resource('http://baidu.com', axios);
//   });
//
//   it('should work', async () => {
//     await Baidu.get().then((res) => {
//       expect(res.data).to.be.a('string');
//     });
//   }).timeout(30000);
// });

makeSuite('Restful methods', () => {
  expect(1).to.be.a('number');
})
