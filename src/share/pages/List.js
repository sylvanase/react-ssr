/*
 * @Author: sylvanas
 * @Date: 2021-01-10 20:55:00
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-16 20:30:22
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
			<div>List page</div>
			<ul>{user && user.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
		</div>
	)
}

// 获取组件需要的数据
function loadData(store) {
	return store.dispatch(fetchUser())
}

const mapStateToProps = (state) => ({ user: state.user })

export default {
	component: connect(mapStateToProps)(List),
	loadData,
}
// export default List
