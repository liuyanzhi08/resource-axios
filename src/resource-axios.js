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
 * @param {Object} ax Axios instance
 * @returns {Object} the resource object
 */

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
    throw new Error('axios is not imported. since v1.1.0, ' +
      'you should import and pass axios into resource\'s constructor.');
  }

  const resource = {
    get: (input) => {
      let id;
      if (typeof input === 'object') {
        id = input.id;
      } else {
        id = input;
      }
      const path = `${base}/${id}`;
      return http.get(path);
    },
    query: params => http.get(base, { params }),
    save: data => http.post(base, data),
    update: (id, data) => http.put(`${base}/${id}`, data),
    delete: id => http.delete(`${base}/${id}`),
  };
  return Object.assign(resource, actions);
};

