/*
 * @Author: sylvanas
 * @Date: 2021-01-10 20:55:00
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-11 23:23:25
 * @Description:
 */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../store/actions/user.action'
function List({ user, dispatch }) {
	useEffect(() => {
		dispatch(fetchUser())
	}, [])
	return (
		<div>
			<ul>{user && user.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
		</div>
	)
}

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps)(List)
