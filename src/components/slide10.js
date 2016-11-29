import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 10
        }
	},
	render () {
		return (
			<div className="m-slide slide8">
				<Header className="heading">React 组件 - 生命周期</Header>
				
				<div className="m-content f-cb">
					<img src="../img/lifecycle.png" width="400" height="450" className="f-fr" />
					<p>1. mounting</p>
					<ul style={{marginLeft: "20px"}}>
						<li>a. mounting.componentWillMount</li>
						<li>b. mounting.componentDidMount</li>
					</ul>
					<p>2. updating</p>
					<ul style={{marginLeft: "20px"}}>
						<li>a. updating.componentWillReceiveProps</li>
						<li>b. updating.shouldComponentUpdate </li>
						<li>c. updating.componentWillUpdate </li>
						<li>d. updating.componentDidUpdate </li>
					</ul>
					<p>3. unmounting</p>
					<ul style={{marginLeft: "20px"}}>
						<li>a. unmounting.componentWillUnmount</li>
					</ul>
					<img src="../img/lifecycle2.png" width="350" height="300" />
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
