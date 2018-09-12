import axios from 'axios';
import assert from 'power-assert';
import resource from '../../dist/resource-axios';
import server from '../helpers/server';

let api;

describe('Restful methods', () => {
  before(() => {
    server.start();
    api = resource(server.base, axios);
  });
  after(() => {
    server.stop();
  });

  it('[get] respond a data object', async () => {
    await api.get(1).then((res) => {
      assert.deepStrictEqual(res.data, { id: 1 });
    });
  });

  it('[query] return a array of obj data', async () => {
    await api.query({ foo: 'bar' }).then((res) => {
      assert.deepStrictEqual(res.data, { items: [{ id: 1 }], total: 1 });
    });
  });

  it('[save] should response a object', async () => {
    await api.save().then((res) => {
      assert.deepStrictEqual(res.data, { id: 1 });
    });
  });

  it('[update] should response a object', async () => {
    await api.update(1, { foo: 'bar' }).then((res) => {
      assert.deepStrictEqual(res.data, { foo: 'bar' });
    });
  });

  it('[delete] should response a object', async () => {
    await api.delete(1).then((res) => {
      assert.deepStrictEqual(res.data, { id: 1 });
    });
  });
});
