import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'
import Ref from './slide9-ref'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 9
        }
	},
	render () {
		return (
			<div className="m-slide slide9">
				<Header className="heading">React 组件 - ref</Header>
				
				<div className="m-content">
					<p>React 组件是存在于内存之中的一种数据结构，称为 virtual DOM, 只有当插入文档以后才会变成真实的 DOM ;</p>
					<p>React 实现了 diff 算法，用于当 DOM 变动，都先在 virtual DOM 上发生，然后再将实际发生变动的部分反映在真实 DOM上，这样能极大提高网页的性能表现;</p>
					<p>ref 属性能从组件获取真实 DOM 的节点。</p>
					<div className="f-cb" style={{marginTop: "5px"}}>
						<Ref className="m-code-res"/>
					</div>
					<p>1. 组件 Ref 内有一个输入框，用于获取用户的输入；</p>
					<p>2. 因为 virtual DOM 取不到用户输入的，所以需要获取真实 DOM；</p>
					<p>3. 为输入框设置 ref 属性，再通过 this.refs.[refName] 取得真实的 DOM 节点</p>
					<p><img src="../img/ref01.jpg" width="600" height="100" />
						<img src="../img/ref02.jpg" width="300" height="80" />
					</p>
					<p>4. 按理说通过 this.refs.name 和 this.refs[name] 都能取得真实的 DOM 节点，并不是很清楚两者的区别，除了：</p>
					<p className="m-warning-box">If you want to preserve Google Closure Compiler advanced-mode crushing resilience, make sure to never access as a property what was specified as a string. This means you must access using this.refs['myRefString'] if your ref was defined as ref="myRefString"</p>
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
