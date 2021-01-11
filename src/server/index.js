import app from './http'
import renderer from './renderer'

app.get('*', (req, res) => {
	// 3. 将结果响应到客户端
	res.send(renderer(req))
})
