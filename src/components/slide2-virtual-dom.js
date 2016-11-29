import React from 'react'

export default React.createClass({
	render () {
		return (
			<div className="m-code-dis with-border">
				<p>React 使用Virtual DOM, 组件 DOM 结构会映射到 Virtual DOM, <br/>
				   React 在 Virtual DOM 上实现了 diff 算法, <br/>
				   当要重新渲染组件的时候,会通过 diff 寻找到要变更的 DOM 节点,<br/>
				   再把这个修改更新到浏览器实际的 DOM 节点上,实际上不是真的渲染整个 DOM 树;<br/>
				   Virtual DOM 是一个纯粹的 JS 数据结构,比原生 DOM 快很多.
				</p>
			</div>
		)
	}
})