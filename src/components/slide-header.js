import React from 'react'

export default React.createClass({
	render () {
		return(
			<div className="m-header">
				<h3 {...this.props}>{this.props.children}</h3>
			</div>
		)
	}
})
