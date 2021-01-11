/*
 * @Author: sylvanas
 * @Date: 2021-01-11 23:07:08
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-11 23:31:40
 * @Description:
 */
import { combineReducers } from 'redux'
import userReducer from './user.reducer'

export default combineReducers({
	user: userReducer,
})
