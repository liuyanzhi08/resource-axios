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
   * @param {Object} ax axios instance
   * @returns {Object} the resource object
   */

  var error = function error(msg) {
    var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'resource-axios';

    throw new Error('[' + tag + '] ' + msg + ' | API: https://github.com/liuyanzhi08/resource-axios');
  };

  var check = function check(input, method) {
    var inputType = typeof input === 'undefined' ? 'undefined' : _typeof(input);
    if (inputType !== 'number' && inputType !== 'string' && inputType !== 'object') {
      error('param should be a number, a string or a object which contains a `id`(or `_id`) attribute', method);
    }
  };

  var getId = function getId(input, method) {
    check(input, method);

    var id = input;
    if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
      id = input.id || input._id;
    }
    if (id === undefined) {
      error('param type of object should contain a `id`(or `_id`) attribute', method);
    }
    return id;
  };

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
      error('axios is not imported. since v1.1.0, ' + 'you should require("axios") and call resource("/base/path", axios)', 'init');
    }

    var query = function query() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      check(params, 'query');
      return http.get(base, { params: params });
    };

    var get$$1 = function get$$1(input) {
      if (input === undefined) {
        return query();
      }
      var id = getId(input, 'get');
      var path = base + '/' + id;
      return http.get(path);
    };

    var save = function save(data) {
      return http.post(base, data);
    };

    var update = function update(input, data) {
      var id = getId(input, 'update');
      return http.put(base + '/' + id, data);
    };

    var _delete = function _delete(input) {
      var id = getId(input, 'delete');
      return http.delete(base + '/' + id);
    };

    var resource = {
      get: get$$1,
      query: query,
      save: save,
      update: update,
      delete: _delete,
      // alias methods
      post: save,
      put: update,
      del: _delete
    };
    return Object.assign(resource, actions);
  });

  return resourceAxios;

})));
