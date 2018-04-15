const resource = require('../index');
const fs = require('fs');
const axios = require('axios');

const Baidu = resource('http://baidu.com', {
  getImg: () => axios.get('http://image.baidu.com'),
});

Baidu.get().then((res) => {
  fs.writeFileSync('test/baidu.html', res.data);
});

Baidu.getImg().then((res) => {
  fs.writeFileSync('test/baidu-img.html', res.data);
});
