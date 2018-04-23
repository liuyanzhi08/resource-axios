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

// import axios from 'axios';
// console.log(axios)

export default (path, actions, outerAxios) => {
  const ax = outerAxios;
  const resource = {
    get: id => ax.get(`${path}/${id}`),
    query: params => ax.get(path, { params }),
    save: data => ax.post(path, data),
    update: (id, data) => ax.put(`${path}/${id}`, data),
    delete: id => ax.delete(`${path}/${id}`),
  };
  return Object.assign(resource, actions);
};

