import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 13
        }
	},
	render () {
		return (
			<div className="m-slide">
				<Header className="heading">React-Redux</Header>
				<div className="m-content">
					<p><a href="http://localhost:8082/" target="_blank">React-Redux Demo</a></p>
					<p style={{marginTop:10}}>UI 组件：只负责 UI 展示，不带业务逻辑，不使用 redux API，也没有状态</p>
					<p>UI 容器组件：负责业务逻辑不负责 UI 展示，使用 redux API，有状态</p>
					<p style={{marginTop:10}}>Provider：在应用顶层提供 store 供应用使用; 
						<img src="../img/s13-provider.jpg" height="100" width="255" />
					</p>
					<p>connect ( mapStateToProps, mapDispatchToProps ) 方法：将 UI 组件打包成容器组件；
						经过 connect( ) 打包成 UI 组件可以得到需要作为 props 使用的属性，以及 dispatch 方法;<br/> 
						<img src="../img/s13-connect.jpg" height="150" width="650" />
					</p>
					<p style={{marginTop:5}}>UI 组件通过 this.props 获得数据
						<img src="../img/s13-render.jpg" height="40" width="200" style={{marginRight:10}} />
						<img src="../img/s13-dispatch.jpg" height="40" width="350" />
					</p>

				</div>
				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
