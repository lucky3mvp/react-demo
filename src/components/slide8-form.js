import React from 'react'

export let DirectValue = React.createClass({
	handleInput () {
		return "";
	},
	render () {
		let value = "test";
		return(
			<div className={this.props.className}>
				<p>您输入的内容是：{value}</p>
				<input type="text" onChange={this.handleInput} value={value} />
			</div>
		)
	}
}) 


export let StateValue = React.createClass({
	getInitialState () {
		return {
			value: ""
		}
	},
	handleInput (event){
		this.setState({
			value: event.target.value
		})
	},
	render () {
		return(
			<div className={this.props.className}>
				<p>您输入的内容是：{this.state.value}</p>
				<input type="text" onChange={this.handleInput} value={this.state.value} />
			</div>
		)
	}
})

export let Checkbox = React.createClass({
	getInitialState () {
		return {
			checked: false,
			picked: false
		}
	},
	handleCheck (event){
		this.setState({
			checked: !this.state.checked
		})
	},
	handlePick (event){
		this.setState({
			picked: !this.state.picked
		})
	},
	render () {
		let checkedTxt = this.state.checked === true ? "checked" : "unchecked";
		let pickedTxt = this.state.picked === true ? "picked" : "unpicked";
		return(
			<div className={this.props.className}>
				<span>checkbox 的状态是：{checkedTxt} </span>
				<input type="checkbox" onChange={this.handleCheck} checked={this.state.checked} />
				<br/>
				<span>radio 的状态是：{pickedTxt} </span>
				<input type="radio" onChange={this.handlePick} checked={this.state.picked} />
			</div>
		)
	}
})

export let Select = React.createClass({
	getInitialState () {
		return {
			value: "A"
		}
	},
	handleSelect (event){
		this.setState({
			value: event.target.value
		})
	},
	render () {
		let value = this.state.value;
		return(
			<div className={this.props.className}>
				<span>您的选择是：{this.state.value} </span>
				<select value={this.state.value} onChange={this.handleSelect}>
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
				</select>
			</div>
		)
	}
})