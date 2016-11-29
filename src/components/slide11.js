import React from 'react'
import {Link} from 'react-router'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 11
        }
	},
	render () {
		return (
			<div className="m-slide slide11">
				<Header className="heading">Redux</Header>

				<div className="m-content">
					<div className="m-feature">
						<p className="tit">Redux is a predictable state container for JavaScript apps</p>
						<p className="tit">Redux 三大原则</p>
						<ul className="sub-list">
							<li>单一数据源：整个应用的state被储存在一棵object tree中，
								并且这个object tree只存在于惟一一个store中
							</li>
							<li>state是只读的，唯一改变state的方法是触发action，
								action是一个描述已发生事件的普通对象
							</li>
							<li>使用纯函数来执行修改，reducer描述action如何改变state</li>
						</ul>
					</div>
					<div className="m-feature">
						<p className="tit">Redux 组成</p>
						<ul className="sub-list">
							<li><Link to='/slide11/action' activeClassName="active">Action</Link></li>
							<li><Link to='/slide11/store' activeClassName="active">Store</Link></li>
							<li><Link to='/slide11/reducer' activeClassName="active">Reducer</Link></li>
							<li><Link to='/slide11/relationship' activeClassName="active">联系</Link></li>
						</ul>
					</div>

					{this.props.children}

				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
