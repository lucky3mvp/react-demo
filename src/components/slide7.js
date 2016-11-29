import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'
import StateTest from './slide7-state'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 7
        }
	},
	render () {
		return (
			<div className="m-slide">
				<Header className="heading">React 组件 - this.state</Header>
				
				<div className="m-content">
					<p>1. React 的组件就是一个状态机，当数据发生变化时，通过调用 setState( data, callback ) 可以触发 React 根据更新后的数据自动重新渲染页面</p>
					<p>2. 可以通过 getInitialState 定义初始状态，它是一个对象，可以通过 this.state 属性读取.</p>
					<StateTest className="m-code-res"/>
					<p style={{margin: "20px 0 0"}}><img src="../img/state01.jpg" width="150" height="80" />
						&nbsp;&nbsp;
						<img src="../img/state02.jpg" width="150" height="80" />
						&nbsp;&nbsp;
						<img src="../img/state03.jpg" width="670" height="150" />
					</p>
					<p>a. 组件 StateTest, 初始状态是未登录, isLogin = false, 因此在三元表达式中 welcome 和 ifHide 分别为 "您还未登陆，请先登陆！" 和 "", 因此登陆按钮处于显示状态；</p>
					<p>b. 当点击按钮时，触发 click 事件，调用 handleLogin，再通过 setState 将 isLogin 置为 true, </p>
					<p>c. 由于 state 的变化，触发 React 根据 isLogin 为 true 值重新渲染页面, 最终显示 "欢迎您 asyxu！" 并隐藏登陆按钮</p>
					<div className="m-warning-box">
						<p>State should contain data that a component's event handlers may change to trigger a UI update.</p>
						<p>State should not contain Computed data、React components、Duplicated data from props.</p>
					</div>
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
