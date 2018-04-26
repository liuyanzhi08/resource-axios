'use strict';

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

// we can't use rollup's import here,
// because there is something conflict between the `debug` and the `rollup` package
// refer:
//   https://github.com/liuyanzhi08/resource-axios/issues/1
//   https://github.com/visionmedia/debug/issues/468
//   https://github.com/visionmedia/debug/issues/438
// import axios from 'axios';
const axios = require('axios');

var resourceAxios = (path, ac = {}, ax = axios) => {
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

module.exports = resourceAxios;
