import React from 'react'
 
export default React.createClass({
	render () {
		return (
			<div className="m-code-dis">
				<ul>
					<li>将数据从应用传到 store，是 store 数据的唯一来源;</li>
					<li>利用 store.dispatch( action ) 将 action 传到 store ;</li>
					<li>普通的 javascript 对象，但必须包括字符串类型的 type 属性;</li>
				</ul>
				<p style={{marginTop:10}}>action 对象：
					<img src="../img/s11-action.jpg" height="50" width="180" />
				</p>
				<p style={{marginTop:10}}>action 函数：
					<img src="../img/s11-actioncreator.jpg" height="100" width="300" />
				</p>

			</div>
		)
	}
})
