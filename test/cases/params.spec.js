import axios from 'axios';
import assert from 'power-assert';
import resource from '../../dist/resource-axios';
import server from '../helpers/server';

let api;

describe('params', () => {
  before(() => {
    server.start();
    api = resource(server.base, axios);
  });
  after(() => {
    server.stop();
  });

  it('init: throw error if the 2nd and the 3rd param is not a axios object', () => {
    assert.throws(() => {
      resource('/test', 'foo');
    }, {
      message: '[init] axios is not imported. since v1.1.0,'
        + ' you should require("axios") and call resource("/base/path", axios) '
        + '| API: https://github.com/liuyanzhi08/resource-axios',
    });
  });

  // method get
  describe('[get]', () => {
    it('param could be a object which contains a id attribute', async () => {
      await api.get({ id: 1 }).then((res) => {
        const book = res.data;
        assert.deepEqual(book, { id: 1 });
      });
    });

    it('param could a object which contains a _id attribute', async () => {
      await api.get({ _id: 1 }).then((res) => {
        const book = res.data;
        assert.deepStrictEqual(book, { id: 1 });
      });
    });

    it('throw error when param is a object which dosen\'t contains a id(_id) attribute', () => {
      assert.throws(() => {
        api.get({ foo: 'bar' });
      }, {
        message: '[get] param type of object should contain a `id`(or `_id`) attribute'
        + ' | API: https://github.com/liuyanzhi08/resource-axios',
      });
    });

    it('throw error when the type of first param isn\'t number, string or object', () => {
      assert.throws(() => {
        api.get(true);
      }, {
        message: '[get] param should be a number, a string or a object which contains a `id`(or `_id`) attribute'
        + ' | API: https://github.com/liuyanzhi08/resource-axios',
      });
    });
  });

  // method query
  describe('[query]', () => {
    it('param could any object', async () => {
      await api.query({ foo: 'bar' }).then((res) => {
        const book = res.data;
        assert.deepStrictEqual(book, { items: [{ id: 1 }], total: 1 });
      });
    });

    it('throw error when the type of first param isn\'t number, string or object', () => {
      assert.throws(() => {
        api.query(true);
      }, {
        message: '[query] param should be a number, a string or a object which contains a `id`(or `_id`) attribute'
        + ' | API: https://github.com/liuyanzhi08/resource-axios',
      });
    });
  });

  // method update
  describe('[update]', () => {
    it('first param could be a object which contains a id attribute', async () => {
      await api.update({ id: 1 }).then((res) => {
        const book = res.data;
        assert.deepEqual(book, { id: 1 });
      });
    });

    it('first param could a object which contains a _id attribute', async () => {
      await api.update({ _id: 1 }).then((res) => {
        const book = res.data;
        assert.deepStrictEqual(book, { id: 1 });
      });
    });

    it('throw error when param is a object which dosen\'t contains a id(_id) attribute', () => {
      assert.throws(() => {
        api.update({ foo: 'bar' });
      }, {
        message: '[update] param type of object should contain a `id`(or `_id`) attribute'
        + ' | API: https://github.com/liuyanzhi08/resource-axios',
      });
    });

    it('throw error when the type of first param isn\'t number, string or object', () => {
      assert.throws(() => {
        api.update(true);
      }, {
        message: '[update] param should be a number, a string or a object which contains a `id`(or `_id`) attribute'
        + ' | API: https://github.com/liuyanzhi08/resource-axios',
      });
    });
  });

  // method delete
  describe('[delete]', () => {
    it('first param could be a object which contains a id attribute', async () => {
      await api.delete({ id: 1 }).then((res) => {
        const book = res.data;
        assert.deepEqual(book, { id: 1 });
      });
    });

    it('first param could a object which contains a _id attribute', async () => {
      await api.delete({ _id: 1 }).then((res) => {
        const book = res.data;
        assert.deepStrictEqual(book, { id: 1 });
      });
    });

    it('throw error when param is a object which dosen\'t contains a id(_id) attribute', () => {
      assert.throws(() => {
        api.delete({ foo: 'bar' });
      }, {
        message: '[delete] param type of object should contain a `id`(or `_id`) attribute'
        + ' | API: https://github.com/liuyanzhi08/resource-axios',
      });
    });

    it('throw error when the type of first param isn\'t number, string or object', () => {
      assert.throws(() => {
        api.delete(true);
      }, {
        message: '[delete] param should be a number, a string or a object which contains a `id`(or `_id`) attribute'
        + ' | API: https://github.com/liuyanzhi08/resource-axios',
      });
    });
  });
});
