/*
 * @Author: sylvanas
 * @Date: 2021-01-10 20:55:00
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-11 22:51:53
 * @Description:
 */
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div
			onClick={() => {
				console.log('click home page')
			}}
		>
			Home page
			<Link to="/list">jump to list</Link>
		</div>
	)
}

export default Home
