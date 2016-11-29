import React from 'react'

export default React.createClass({
	getInitialState () {
		return {
			isLogin: false
		}
	},
	handleLogin (){
		this.setState({
			isLogin: true
		})
	},
	render () {
		let welcome = this.state.isLogin ? "欢迎您 asyxu！" : "您还未登陆，请先登陆！";
		let ifHide = this.state.isLogin ? "hide" : "";
		return(
			<div {...this.props} style={{margin: "10px 10px", height:56}}>
				<p>{welcome}</p>
				<input type="button" onClick={this.handleLogin} value="点击登陆" className={ifHide} />
			</div>
		)
	}
}) 
