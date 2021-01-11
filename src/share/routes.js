/*
 * @Author: sylvanas
 * @Date: 2021-01-11 22:22:27
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-11 22:45:27
 * @Description:
 */
import Home from '../share/pages/Home'
import List from '../share/pages/List'

export default [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/list',
		component: List,
	},
]
