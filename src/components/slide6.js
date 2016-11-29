import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'
import PropTypeTest from './slide6-proptype'
import DefaultPropTest from './slide6-defaultprop'

export default React.createClass({
	getInitialState () {
        return {
        	first: false,
        	last: false,
        	index: 6
        }
	},
	render () {
		let ageNum = 18; 
		let ageStr = "18"; 
		return (
			<div className="m-slide slide6">
				<Header className="heading">React 组件 - PropTypes</Header>
				
				<div className="m-content">
					<p>1. PropTypes 对组件 props 进行验证，当组件实例使用组件但为传入的属性不通过propType的验证时会报错</p>
					<p>2. 创建 PropTypeTest 组件，并设置一个 age 属性，要求类型为数字，且是必须的：</p>
					<p><img src="../img/proptype01.jpg" width="500" height="130" /></p> 
					<p>3. 接着在本页中引用 PropTypeTest 组件，分别传入的 age 属性值为：数字18，字符串18，以及不传 age 属性：</p>
					<div className="f-cb">
						<img src="../img/proptype02.jpg" width="350" height="150" />
						<div className="m-code-res">
							<div>test1: 传入 age 属性值为数字18, 显示结果:<br/>
								<PropTypeTest age={ageNum} />
							</div>
							<div>test2: 传入 age 属性值为字符串18, 显示结果:<br/>
								<PropTypeTest age={ageStr} />
							</div>
							<div>test3: 不传 age, 显示结果:<br/>
								<PropTypeTest />
							</div>
						</div>
					</div> 
					<p>3. 例如：本例中，规定了 age 为数据且必须后，那么 test2 和 test3 就不会通过验证，将会进行报错
					</p>
					<p className="t-red">4. 疑问？：上述应该只是理论情况，实际中 test2 和 test3 并没有报错。。。</p>
					<p>5. 可以使用 getDefaultProps来设置默认属性：</p>
					<div className="f-cb">
						<img src="../img/s6-defaultprop.jpg" width="200" height="100" />
						<div className="m-code-res">
							<div>test4: 不传 age, 但通过getDefaultProps设置了默认值，显示结果:<br/>
								<DefaultPropTest />
							</div>
						</div>
					</div>
				</div>

				<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
			</div>
		)
	}
})
