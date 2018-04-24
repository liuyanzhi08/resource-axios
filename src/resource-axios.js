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
 * @param {String} path the resource path
 * @param  {Object} actions custom actions to overwrite or to add
 * @returns {Object} the resource object
 */

import axios from 'axios';

export default (path, ac = {}, ax = axios) => {
  // support invoking like: `resource('/api', axios)`
  // and `resource('/api', null, axios)`
  let http = ax;
  let actions = ac;
  if (actions && actions.Axios) {
    http = actions;
    actions = {};
  }
  const resource = {
    get: id => http.get(`${path}/${id}`),
    query: params => http.get(path, { params }),
    save: data => http.post(path, data),
    update: (id, data) => http.put(`${path}/${id}`, data),
    delete: id => http.delete(`${path}/${id}`),
  };
  return Object.assign(resource, actions);
};

