import React from 'react'

export default React.createClass({
	PropTypes: {
		age: React.PropTypes.number.isRequired
	},
	getDefaultProps () {
        return {
        	age: 19
        }
	},
	render () {
		let type = typeof this.props.age;
		return(
			<p className="m-prop-test">我{this.props.age}岁啦~~ typeof this.props.age 为 {type}</p>
		)
	}
})