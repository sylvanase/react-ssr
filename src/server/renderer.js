import React from 'react'
import { renderToString } from 'react-dom/server'
// 1. 引入组件
import Home from '../share/pages/Home'

export default () => {
	// 2. 使用 renderToString 将组件转化为 HTML 字符串
	const content = renderToString(<Home />)
	return `<html>
  <head>
    <title>react ssr</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
  </body>
</html>`
}
