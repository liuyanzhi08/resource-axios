import t from '../dist/resource-axios'
var s = t('http://baidu.com')
s.get().then(res => {
	console.log(res.data)
})