/*
 * @Author: sylvanas
 * @Date: 2021-01-11 23:05:10
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-11 23:33:13
 * @Description:
 */

import { FETCH_USER } from '../actions/user.action'

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload.data
		default:
			return state
	}
}
