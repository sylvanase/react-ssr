/*
 * @Author: sylvanas
 * @Date: 2021-01-10 20:50:57
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-10 21:00:03
 * @Description:
 */

import app from './http'
// 1. 引入组件
import Home from '../share/pages/Home'

import { renderToString } from 'react-dom/server'

app.get('/', (req, res) => {
	// 2. 使用 renderToString 将组件转化为 HTML 字符串
	const content = renderToString(<Home />)

	// 3. 将结果响应到客户端
	res.send(`<html>
    <head>
      <title>react ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>`)
})
