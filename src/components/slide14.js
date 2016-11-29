import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: true,
        	index: 14
        }
	},
	render () {
		return (
			<div className="m-slide">
				<Header className="title">Thank You !</Header>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
