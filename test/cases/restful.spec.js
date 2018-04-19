import resourceAxios from '../../index';

describe('Restful methods', () => {
  const defaultTimeoutInterval = 5000;
  let Baidu;
  beforeAll(() => {
    Baidu = resourceAxios('http://baidu.com');
  });

  it('should work', async () => {
    await Baidu.get().then((res) => {
      expect(res.data).toBeDefined();
    });
  }, defaultTimeoutInterval);
});
