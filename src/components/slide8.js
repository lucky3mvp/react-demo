import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'
import {DirectValue, StateValue, Checkbox, Select} from './slide8-form'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 8
        }
	},
	render () {
		return (
			<div className="m-slide slide8">
				<Header className="heading">React 组件 - form</Header>
				
				<div className="m-content">
					<p>1. 表单的内容属于跟用户交互的内容，不能用 props, 一般通过表单事件触发回调函数，
						再通过 setState 改变状态来实现与用户的交互行为</p>
					<div className="f-cb">
						test1: 直接写 input 的 value 属性:<br/>
						<DirectValue className="m-code-res"/>
						<img src="../img/form01.jpg" width="400" height="100" style={{marginLeft: "10px"}}/>
					</div>
					<div className="f-cb" style={{marginTop: "10px"}}>
						test2: 通过 state 更新 value :<br/>
						<StateValue className="m-code-res"/> <br/>
						<img src="../img/form02.jpg" width="500" height="80" style={{marginTop: "10px"}}/>
						<img src="../img/form03.jpg" width="200" height="80" style={{marginLeft: "10px", marginTop: "10px"}}/>
					</div>
					<div className="f-cb" style={{marginTop: "10px", marginRight: "10px", float: "left"}}>
						test3: 通过 onchange 更新 checkbox, radio 状态 :<br/>
						<Checkbox className="m-code-res"/>
					</div>
					<div style={{marginTop: "10px"}}>
						test4: 通过 onchange 更新 select 状态 :<br/>
						<Select className="m-code-res"/>
					</div>
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
