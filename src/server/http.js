/*
 * @Author: sylvanas
 * @Date: 2021-01-10 20:48:58
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-10 21:43:42
 * @Description:
 */
import express from 'express'
const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
	console.log('server is listening on 3000 port')
})

export default app
