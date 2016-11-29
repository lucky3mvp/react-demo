import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 14
        }
	},
	render () {
		return (
			<div className="m-slide">
				<Header className="heading">References</Header>
				<div className="m-content">
					<p>react <a href="https://facebook.github.io/react/" target="_blank">https://facebook.github.io/react/</a><br/>
						<a style={{marginLeft:52}} href="http://reactjs.cn/react/index.html" target="_blank">http://reactjs.cn/react/index.html</a>
					</p>
					<p>redux <a href="http://cn.redux.js.org/index.html" target="_blank">http://cn.redux.js.org/index.html</a></p>
					<p>redux <a href="http://cn.redux.js.org/index.html" target="_blank">http://cn.redux.js.org/index.html</a></p>
					<p>阮一峰<br/>
						<a href="http://www.ruanyifeng.com/blog/2015/03/react.html" target="_blank">http://www.ruanyifeng.com/blog/2015/03/react.html</a><br/>
						<a href="http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu" target="_blank">http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu</a><br/>
						<a href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html" target="_blank">http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html</a><br/>
						<a href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html" target="_blank">http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html</a><br/>
						<a href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html" target="_blank">http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html</a><br/>
						webpack, css modules, es6...
					</p>
				</div>
				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
