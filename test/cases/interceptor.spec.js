import axios from 'axios';
import chai from 'chai';
import resource from '../../dist/resource-axios';

const { expect } = chai;

describe('Add interceptors', () => {
  let Baidu;
  before(() => {
    Baidu = resource('http://baidu.com', null, axios);

    // Add a request interceptor
    axios.interceptors.request.use((config) => {
      // Do something before request is sent
      console.log(config);
      return config;
    }, (error) => {
      // Do something with request error
      console.log(error);
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use((response) => {
      // Do something with response data
      console.log(response);
      return response;
    }, (error) => {
      // Do something with response error
      console.log(error);
      return Promise.reject(error);
    });
  });

  it('should work', async () => {
    await Baidu.get().then((res) => {
      expect(res.data).to.a('string');
    });
  }).timeout(30000);
});
