import chai from 'chai';
import resourceAxios from '../../dist/resource-axios';

const { expect } = chai;

describe('Restful methods', () => {
  let Baidu;
  before(() => {
    Baidu = resourceAxios('http://baidu.com');
  });

  it('should work', async () => {
    await Baidu.get().then((res) => {
      expect(res.data).to.be.a('string');
    });
  }).timeout(30000);
});
