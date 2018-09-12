import axios from 'axios';
import assert from 'power-assert';
import resource from '../../dist/resource-axios';
import server from '../helpers/server';

let api;

describe('customer actions', () => {
  before(() => {
    server.start();
    api = resource(server.base, {
      order: () => axios.post(`${server.base}/1/order`),
    }, axios);
  });
  after(() => {
    server.stop();
  });

  it('should work', async () => {
    await api.order().then((res) => {
      const book = res.data;
      assert.deepEqual(book, { id: 1 });
    });
  }).timeout(30000);
});
