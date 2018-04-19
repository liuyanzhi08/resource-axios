import axios from 'axios';
import resourceAxios from '../../index';

describe('Customize actions', () => {
  const defaultTimeoutInterval = 5000;
  let Baidu;
  beforeAll(() => {
    Baidu = resourceAxios('http://baidu.com', {
      getImg: () => axios.get('http://image.baidu.com'),
    });
  });

  it('should work', async () => {
    await Baidu.getImg().then((res) => {
      expect(res.data).toBeDefined();
    });
  }, defaultTimeoutInterval);
});
