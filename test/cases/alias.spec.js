import axios from 'axios';
import assert from 'power-assert';
import resource from '../../dist/resource-axios';
import server from '../helpers/server';

let api;

describe('methods alias', () => {
  before(() => {
    server.start();
    api = resource(server.base, axios);
  });
  after(() => {
    server.stop();
  });

  it('post === save', () => {
    api.post({ foo: 'bar' }).then((res) => {
      assert.deepStrictEqual(res.data, { id: 1 });
    });
  });

  it('put === update', () => {
    api.put(1, { foo: 'bar' }).then((res) => {
      assert.deepStrictEqual(res.data, { id: 1 });
    });
  });

  it('del === delete', () => {
    api.del(1).then((res) => {
      assert.deepStrictEqual(res.data, { id: 1 });
    });
  });

  it('get(/* no param */) === query()', () => {
    api.get().then((res) => {
      assert.deepStrictEqual(res.data, { items: [{ id: 1 }], total: 1 });
    });
  });
});
