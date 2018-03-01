/**
 * create vue-resource's resource like object
 *
 * Default Actions
 *   get: {method: 'GET'}
 *   save: {method: 'POST'}
 *   query: {method: 'GET'}
 *   update: {method: 'PUT'}
 *   delete: {method: 'DELETE'}
 *
 * @param path the resource path
 * @param actions custom actions
 * @returns the resource object
 */

import axios from 'axios'
export default (path, actions) => {
	let obj = {
		get: id => axios.get(path + '/' + id),
		save: obj => axios.post(path, obj),
		query: params => axios.get(path, { params }),
		update: (id, obj) => axios.put(path + '/' + id, obj),
		delete: id => axios.delete(path + '/' + id)
	}
	return Object.assign(obj, actions)
}
