import React from 'react'
 
export default React.createClass({
	render () {
		return (
			<div className="m-code-dis with-border">
				<ul>
					<li>reducer 接收 old state 和 action，返回 new state;</li>
					<li>reducer 是一个纯函数，同样的参数一定能得到相同的结果;</li>
					<li className="t-red">
						不能修改传入的参数；
						不能执行有副作用的操作，如 API 请求和路由跳转；
						不能调用非纯函数
					</li>
				</ul>
				<img src="../img/s11-reducer-no.png" height="80" width="350" />
			</div>
		)
	}
})
