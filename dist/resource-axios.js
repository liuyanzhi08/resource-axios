(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.resource = factory());
}(this, (function () { 'use strict';

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
   * @param  {Object} ac custom actions to overwrite or to add
   * @param {Object} ax Axios instance
   * @returns {Object} the resource object
   */

  var resourceAxios = (function (path) {
    var ac = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ax = arguments[2];

    // support invoking like: `resource('/api', axios)`
    // and `resource('/api', null, axios)`
    var http = ax;
    var actions = ac;
    if (actions && actions.Axios) {
      http = actions;
      actions = {};
    }
    var resource = {
      get: function get(id) {
        return http.get(path + "/" + id);
      },
      query: function query(params) {
        return http.get(path, { params: params });
      },
      save: function save(data) {
        return http.post(path, data);
      },
      update: function update(id, data) {
        return http.put(path + "/" + id, data);
      },
      delete: function _delete(id) {
        return http.delete(path + "/" + id);
      }
    };
    return Object.assign(resource, actions);
  });

  return resourceAxios;

})));
