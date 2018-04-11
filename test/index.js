const resource = require('../index');
const fs = require('fs');

const baiduApi = resource('http://baidu.com');
baiduApi.get().then((res) => {
  fs.writeFileSync('test/baidu.html', res.data);
});
