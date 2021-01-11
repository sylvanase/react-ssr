/*
 * @Author: sylvanas
 * @Date: 2021-01-10 21:28:28
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-11 22:50:15
 * @Description:
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import routes from '../share/routes'
import { renderRoutes } from 'react-router-config'

ReactDOM.hydrate(
	<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
	document.getElementById('root')
)
