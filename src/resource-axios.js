/**
 * create vue-resource's resource like object
 *
 * Default Actions
 *   get: {method: 'GET'}
 *   query: {method: 'GET'}
 *   save: {method: 'POST'}
 *   update: {method: 'PUT'}
 *   delete: {method: 'DELETE'}
 *
 * @param {String} base the resource base
 * @param  {Object} ac custom actions to overwrite or to add
 * @param {Object} ax axios instance
 * @returns {Object} the resource object
 */

const error = (msg, tag = 'resource-axios') => {
  throw new Error(`[${tag}] ${msg} | API: https://github.com/liuyanzhi08/resource-axios`);
};

const check = (input, method) => {
  const inputType = typeof input;
  if (inputType !== 'number'
    && inputType !== 'string'
    && inputType !== 'object'
  ) {
    error('param should be a number, a string or a object which contains a `id`(or `_id`) attribute', method);
  }
};

const getId = (input, method) => {
  check(input, method);

  let id = input;
  if (typeof input === 'object') {
    id = input.id || input._id;
  }
  if (id === undefined) {
    error('param type of object should contain a `id`(or `_id`) attribute', method);
  }
  return id;
};

export default (base, ac = {}, ax) => {
  // support invoking like: `resource('/api', axios)`
  // and `resource('/api', null, axios)`
  let http = ax;
  let actions = ac;
  if (actions && actions.Axios) {
    http = actions;
    actions = {};
  }

  if (typeof http === 'undefined') {
    error('axios is not imported. since v1.1.0, '
      + 'you should require("axios") and call resource("/base/path", axios)', 'init');
  }

  const query = (params = {}) => {
    check(params, 'query');
    return http.get(base, { params });
  };

  const get = (input) => {
    if (input === undefined) {
      return query();
    }
    const id = getId(input, 'get');
    const path = `${base}/${id}`;
    return http.get(path);
  };

  const save = data => http.post(base, data);

  const update = (input, data) => {
    const id = getId(input, 'update');
    let resolvedData = data;
    if (resolvedData === undefined) {
      resolvedData = input;
    }
    return http.put(`${base}/${id}`, resolvedData);
  };

  const _delete = (input) => {
    const id = getId(input, 'delete');
    return http.delete(`${base}/${id}`);
  };

  const resource = {
    get,
    query,
    save,
    update,
    delete: _delete,
    // alias methods
    post: save,
    put: update,
    del: _delete,
  };
  return Object.assign(resource, actions);
};
