var t = require('../index')
var s = t('http://baidu.com')
s.get().then(res => {
	console.log(res.data)
})