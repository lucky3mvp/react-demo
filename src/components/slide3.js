import React from 'react'
import {Router, Route, hashHistory, IndexRedirect, Link } from 'react-router'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 3
        }
	},
	render () {
		function createMarkup2() { 
			return {
				__html: 'ReactDOM.render(' + '<br/>' + 
						'&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello, world!&lt;/h1&gt;,' + '<br/>' +
						'&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById("demo01")'+ '<br/>' +
						');'
			}
		}
		function createMarkup(str) { 
			return {
				__html: str
			}
		}
		return (
			<div className="m-slide slide3">
				<Header className="heading">React 基本用法</Header>

				<div className="m-content">
					<div className="f-cb">
						<div className="m-code-res">
							<p className="ta-c">Hello, world!</p>
						</div>
					</div> 

					<div className="m-tips">
						<p>1. React 最基本的用法：用 ReactDOM.render 方法将模版转换成 html 插入指定的 dom 节点</p>
						<p dangerouslySetInnerHTML={createMarkup('2. JSX 语法规则：遇到 HTML 标签（以 < 开头）, 就用 HTML 规则解析; 遇到代码块（以 { 开头），就用 JavaScript 规则解析')} />
						<p>3. 因为 jsx 遇到大括号会用 javascript 规则进行解析, 直接写 &lt; 或 ｛ 就会报错</p>
						<p><img src="../img/s3-jsx2.jpg" width="100%" /></p>
						<div>4. 为了在页面写入 html 格式的信息，可用官方推荐的但并不推荐的写法 dangerouslySetInnerHTML: <br/>
							<p dangerouslySetInnerHTML={createMarkup("function createMarkup(str) {<br/>&nbsp;&nbsp; return { __html: str };<br/>};")} />
							<p dangerouslySetInnerHTML={createMarkup("< div dangerouslySetInnerHTML = { createMarkup() } />")} />
						</div>
					</div>

					<div className="m-code-dis">
						<div dangerouslySetInnerHTML={createMarkup2()} />
					</div>
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})