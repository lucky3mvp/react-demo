import React from 'react'
 
export default React.createClass({
	render () {
		return (
			<div className="m-code-dis with-border">
				<ul>
					<li>store 是将 action 和 reducer 联系起来的对象</li>
					<li>通过 createStore( reducer, initialState ) 生成一个 store 
						<img src="../img/s11-store-create.jpg" height="50" width="200" />
					</li>
					<li>调用 store.dispatch( action ) 传递 action 时会自动触发 reducer</li>
				</ul>
				<p style={{marginTop:10}}>store 方法：</p>
				<ul style={{marginLeft:20}}>
					<li>store.dispatch( action ) : 更新state</li>
					<li>store.getState( ) : 获取state</li>
					<li>store.subscribe( listener ) : 注册监听器，以及返回函数注销监听器</li>
				</ul>
			</div>
		)
	}
})
