import chai from 'chai';
import resource from '../../dist/resource-axios';

const { expect } = chai;

describe('Restful methods', () => {
  let Baidu;
  before(() => {
    Baidu = resource('http://baidu.com');
  });

  it('should work', async () => {
    await Baidu.get().then((res) => {
      expect(res.data).to.be.a('string');
    });
  }).timeout(30000);
});
