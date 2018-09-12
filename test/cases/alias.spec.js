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

  it('post === save', async () => {
    await api.post({ foo: 'bar' }).then((res) => {
      assert.deepStrictEqual(res.data, { id: 1 });
    });
  });

  it('put === update', async () => {
    await api.put(1, { foo: 'bar' }).then((res) => {
      assert.deepStrictEqual(res.data, { foo: 'bar' });
    });
  });

  it('del === delete', async () => {
    await api.del(1).then((res) => {
      assert.deepStrictEqual(res.data, { id: 1 });
    });
  });

  it('get(/* no param */) === query()', async () => {
    await api.get().then((res) => {
      assert.deepStrictEqual(res.data, { items: [{ id: 1 }], total: 1 });
    });
  });

  it('update({ id: 1, foo: \'bar\' }) === update(1, { id: 1, foo: \'bar\' })', async () => {
    await api.update({ id: 1, foo: 'bar' }).then((res) => {
      assert.deepStrictEqual(res.data, { id: 1, foo: 'bar' });
    });
  });
});
