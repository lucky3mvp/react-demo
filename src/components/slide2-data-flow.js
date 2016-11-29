import React from 'react'

export default React.createClass({
	render () {
		return (
			<div className="m-code-dis with-border">
				<p>单向数据绑定: <br/>
				   即当有数据发生变化时，由 owner 依据 props 或 state 将计算后的信息通过 props 传递给 ownee;<br/>
				</p>
			</div>
		)
	}
})