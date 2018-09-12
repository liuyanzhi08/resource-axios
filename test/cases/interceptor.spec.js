import axios from 'axios';
import chai from 'chai';
import resource from '../../dist/resource-axios';

const { expect } = chai;

describe('Interceptors', () => {
  let Baidu;
  let Baidu2;

  before(() => {
    Baidu = resource('http://baidu.com', null, axios);
    Baidu2 = resource('http://baidu.com', axios);

    // Add a request interceptor
    axios.interceptors.request.use((config) => {
      // Do something before request is sent
      // expect(config.headers).to.be.a('object');
      return config;
    });

    // Add a response interceptor
    axios.interceptors.response.use((response) => {
      // Do something with response data
      // expect(response.data).to.be.a('string');
      return response;
    });
  });

  // it('should work', async () => {
  //   await Baidu.get();
  // }).timeout(30000);
  //
  // it('without customized actions, should also works', async () => {
  //   await Baidu2.get();
  // }).timeout(30000);
});
