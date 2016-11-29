import React from 'react'

// export default React.createClass({
export default class proptype extends React.Component{
	constructor (props) {
 		super(props);
 	}
	PropTypes: {
		age: React.PropTypes.number.isRequired
	}
	render () {
		let type = typeof this.props.age;
		return(
			<p className="m-prop-test">我{this.props.age}岁啦~~ typeof this.props.age 为 {type}</p>
		)
	}
}