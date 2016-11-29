import React from 'react'
import {Link } from 'react-router'
import Header from './slide-header'
import Footer from './slide-footer'
import JSX from './slide2-jsx'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 2
        }
	},
	render () {
		return (
			<div className="m-slide slide2">
				<Header className="heading">React 概述</Header>

				<div className="m-content">
					<div className="m-feature">
						<p className="tit">1. React 特点</p>
						<ul className="sub-list">
							<li><span className="t-bold">Simple</span>:Simply express how app should look at any given point in time, automatically manage all UI updates.</li>
							<li><span className="t-bold">Declarative</span>:When data changes, automatically update and only update the changed parts.</li>
							<li><span className="t-bold">Components</span></li>
						</ul>
					</div>
					<div className="m-feature">
						<p className="tit">2. React 核心思想</p>
						<ul className="sub-list">
							<li><Link to="slide2/jsx" activeClassName="active">JSX</Link></li>
							<li><Link to="slide2/component" activeClassName="active">Component</Link></li>
							<li><Link to="slide2/virtual-dom" activeClassName="active">Virtual DOM</Link></li>
							<li><Link to="slide2/data-flow" activeClassName="active">Data Flow</Link></li>
						</ul>
					</div>

					{this.props.children}
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})