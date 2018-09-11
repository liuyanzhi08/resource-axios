(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.resource = factory());
}(this, (function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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

  var resourceAxios = (function (base) {
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

    if (typeof http === 'undefined') {
      throw new Error('axios is not imported. since v1.1.0, ' + 'you should import and pass axios into resource\'s constructor.');
    }

    var resource = {
      get: function get$$1(input) {
        var id = void 0;
        if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
          id = input.id;
        } else {
          id = input;
        }
        var path = base + '/' + id;
        return http.get(path);
      },
      query: function query(params) {
        return http.get(base, { params: params });
      },
      save: function save(data) {
        return http.post(base, data);
      },
      update: function update(id, data) {
        return http.put(base + '/' + id, data);
      },
      delete: function _delete(id) {
        return http.delete(base + '/' + id);
      }
    };
    return Object.assign(resource, actions);
  });

  return resourceAxios;

})));
