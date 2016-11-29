import React from 'react'
 
export default React.createClass({
	getInitialState () {
		return {
			es6jpg: false
		}
	},
	showES6 (e) {
		this.setState({es6jpg: !this.state.es6jpg})
	},
	render () {
		return (
			<div className="m-code-dis with-border">
				<p>React.createClass 用于生成一个组件类;<br/>
				   组件有一个 render() 方法,用于接收输入,并输出该组件渲染的信息;<br/>
				   组件可以直接向Html标签那样使用;<br/>
				   需注意的是组件名应<span className="txt-blod">首字母大写</span><br/>
				   React 区分 html 标签和 react 组件的关键就在于标签首字母是否是大写.
				</p>
				<div onClick={this.showES6}>
					<img src="../img/jsx.jpg" height="400" width="500" className={this.state.es6jpg ? "hide" : ""} />
					<img src="../img/s2-component-es6.jpg" height="100" width="500" className={this.state.es6jpg ? "" : "hide"} />
				</div>
			</div>
		)
	}
})

// export default class Slide2component extends React.Component{
// 	constructor (props) {
// 		super(props);
// 	}
// } 