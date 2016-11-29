import React from 'react'

export default React.createClass({
	handleClick () {
		if (this.refs.myInput !== null) {
			this.refs.myInput.focus();
		}
	},
	render () {
		return (
			<div className={this.props.className}>
				<input type="text" ref="myInput" />
				<br />
				<input type="button" value="Focus the text input" onClick={this.handleClick} />
			</div>
		)
	}
}) 
