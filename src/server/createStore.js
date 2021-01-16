/*
 * @Author: sylvanas
 * @Date: 2021-01-11 23:46:55
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-11 23:46:55
 * @Description:
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../share/store/reducers'

export default () => createStore(reducers, {}, applyMiddleware(thunk))
