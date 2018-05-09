import axios from 'axios';
import chai from 'chai';
import resource from '../../dist/resource-axios';

const { expect } = chai;

describe('Customize actions', () => {
  let Baidu;
  before(() => {
    Baidu = resource('https://image.baidu.com/', {
      getImg: () => axios.get('https://image.baidu.com/'),
    }, axios);
  });

  it('should work', async () => {
    await Baidu.getImg().then((res) => {
      expect(res.data).to.a('string');
    });
  }).timeout(30000);
});
