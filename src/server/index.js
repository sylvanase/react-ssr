import app from './http'
import renderer from './renderer'
import createStore from './createStore'
import routes from '../share/routes'
import { matchRoutes } from 'react-router-config'

app.get('*', (req, res) => {
	const store = createStore()
	// 请求地址 req.path
	// 获取路由配置信息 routes
	// 根据请求地址匹配出要渲染的组件的路由对象信息
	const promises = matchRoutes(routes, req.path).map(({ route }) => {
		// 防御编程，存在loadData的话触发
		if (route.loadData) {
			// promise 对象
			return route.loadData(store)
		}
	})
	Promise.all(promises).then(() => {
		// 确保请求完成后渲染
		// 3. 将结果响应到客户端
		res.send(renderer(req, store))
	})
})
