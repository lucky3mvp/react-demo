import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 5
        }
	},
	render () {
		let tIndent = "1.5em";
		return (
			<div className="m-slide">
				<Header className="heading">React 组件 - this.props.children</Header>
				
				<div className="m-content">
					<div className="m-tips">
						<p><img src="../img/component03.jpg" width="500" height="65"/></p>
						<p>1. Header 组件有子节点, 那么就可以通过 this.props.children 获取到子节点</p>
						<p>2. 在使用 this.props.children 时应注意：</p>
						<p style={{textIndent:tIndent}}>a. 如果当前组件没有子节点，this.props.children为undefined ;</p>
						<p style={{textIndent:tIndent}}>b. 如果当前组件有一个子节点，this.props.children 数据类型是 object ; </p>
						<p style={{textIndent:tIndent}}>c. 如果当前组件有一个子节点，this.props.children 数据类型是 array</p>
						<p>3. 官方推荐使用 <span className="t-bold">React.Children.map ( children, function [ ( thisArg ) ] ) / forEach</span> 来处理children</p>
						<p className="t-red">4. 疑问？：</p>
						<p style={{textIndent:tIndent}}>对本页的 Header 组件而言，typeof this.props.children 的结果为 string ;</p>
						<p style={{textIndent:tIndent}}><img src="../img/component04.jpg" width="600" height="50"/></p>
						<p style={{textIndent:tIndent}}>这种情况 typeof this.props.children 的结果才是 object</p>
					</div>
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
