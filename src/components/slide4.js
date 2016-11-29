import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 4
        }
	},
	render () {
		let tIndent = "1.5em";
		return (
			<div className="m-slide">
				<Header className="heading">React 组件</Header>
				
				<div className="m-content">
					<div className="m-tips">
						<p>1. React 使用 React.createClass() 创建组件，每个组件都有一个 render 方法, 比如 Header 组件的render用于渲染每一页的标题:</p>
						<p><img src="../img/component01.jpg" width="400" height="200"/></p>
						<p>2. 创建后的组件能直接像 html 标签一样使用 ( 注意：为了区分 html 标签和 react 组件规定组件名首字母必须是大写 )</p>
						<p><img src="../img/component02.jpg" width="400" height="70"/></p>
						<p>3. 组件应该只能有一个顶层标签;</p>
						<p>4. 组件与 html 标签用法一样，可以向组件添加任意属性，比如 class 属性 ( 注意：因为 class, for 为 js 保留字，因此应写成 className, htmlFor )</p>
						<p>5. 在组件内，通过 this.props.propName 和 this.props.children 来获取属性值：</p>
						<p style={{textIndent:tIndent}}>Header 通过 this.props.children 来获取每页 slide 的标题，并显示在 h3 标签中</p>
						<p style={{textIndent:tIndent}}>Header 通过 this.props.className 来获取标题的样式，这里通过 spread 来获取</p>
					</div>
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
