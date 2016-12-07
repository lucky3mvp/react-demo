import React from 'react'
import Header from './slide-header'
import Footer from './slide-footer'
import ScrollArea from 'react-scrollbar';

export default React.createClass({
	getInitialState () {
        return {
        	first: true,
        	last: false,
        	index: 1
        }
	},
	render () {
		return (
			<div>
				<div className="m-slide">
					<Header className="title">Learn React and Write Some Demos</Header>
					
					<div className="m-content"></div>

					<div className="m-sign">
						<p>asyxu</p>
						<p>2016.10.28</p>
					</div>

					<Footer first={this.state.first} last={this.state.last} index={this.state.index} /> 
				</div>

				<ScrollArea
					speed={0.8}
					className="area"
					contentClassName="content"
					horizontal={true}
					style={{height:'50px',paddinBottom:'40px', display:'none'}}
				>
					<div>Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					Some long content.<br/>
					</div>
				</ScrollArea>
			</div>
		)
	}
})
