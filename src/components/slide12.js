import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 12
        }
	},
	render () {
		return (
			<div className="m-slide slide12">
				<Header className="heading">Redux-demo</Header>
				<div className="m-content">
					<p><a href="http://localhost:8081/" target="_blank">Redux Demo</a></p>
					
					<div className="m-step">
						<div>1. 在应用顶层建立 store 并监听 
							<img src="../img/s12-step1.jpg" height="150" width="255" /> 
						</div>
						<div>2. 当用户点击 '添加' 触发onClick事件执行回调函数 
							<img src="../img/s12-step2.jpg" height="20" width="150" /> 
						</div>
						<div>3. addTodo 函数先调用 createAddAction 返回一个 action, 
							再调用 dispatch 将 action 传给 store
							<img src="../img/s12-step3.jpg" height="20" width="340" />
							<img src="../img/s12-step3-action.jpg" height="80" width="340" />
						</div>
						<div  style={{marginTop:5}}>4. 触发 reducer 返回新的 state 
							<img src="../img/s12-step4.jpg" height="70" width="260" />
						</div>
						<div>5. 重新渲染 </div>
					</div>

					<img src="../img/redux-workflow.jpg" height="250" width="300" style={{marginTop:50}}/>
				
					<div className="m-warning-box">
						<p>Redux 非必要 : </p>
						<p>1. 用户的使用方式非常简单</p>
						<p>2. 用户之间没有协作</p>
						<p>3. 不需要与服务器大量交互，也没有使用 WebSocket</p>
						<p>4. 视图层（View）只从单一来源获取数据</p>
					</div>
				</div>
				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
