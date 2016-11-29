import React from 'react'
import {Link, IndexLink} from 'react-router'

export default React.createClass({
	render () {
		let prevPageUrl = "",
			nextPageUrl = "",
			index = this.props.index,
			isFirst = this.props.first,
			isLast = this.props.last,
			nUrl = "/slide" + (index + 1),
			pUrl = "/slide" + (index - 1);

		if(isFirst){ 
			return (
				<div className="m-footer f-cb">
					<Link to={nUrl} className="pager-opt next">下一页</Link>
				</div>
			)
		}else if(isLast){
			return (
				<div className="m-footer f-cb">
					<Link to={pUrl} className="pager-opt prev" >上一页</Link>
				</div>
			)
		}else{
			return (
				<div className="m-footer f-cb">
					<Link to={nUrl} className="pager-opt next">下一页</Link>
					<Link to={pUrl} className="pager-opt prev" >上一页</Link>
				</div>
			)
		}
	}
})