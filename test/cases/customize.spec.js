import axios from 'axios';
import chai from 'chai';
import resourceAxios from '../../dist/resource-axios';

const { expect } = chai;

describe('Customize actions', () => {
  let Baidu;
  before(() => {
    Baidu = resourceAxios('http://baidu.com', {
      getImg: () => axios.get('http://image.baidu.com'),
    });
  });

  it('should work', async () => {
    await Baidu.getImg().then((res) => {
      expect(res.data).to.a('string');
    });
  }).timeout(30000);
});
