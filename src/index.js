import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect } from 'react-router'
import Slide1 from './components/slide1'
import Slide2 from './components/slide2'
import Slide2jsx from './components/slide2-jsx'
import Slide2component from './components/slide2-component'
import Slide2virtualDom from './components/slide2-virtual-dom'
import Slide2dataFlow from './components/slide2-data-flow'
import Slide3 from './components/slide3'
import Slide4 from './components/slide4'
import Slide5 from './components/slide5'
import Slide6 from './components/slide6'
import Slide7 from './components/slide7'
import Slide8 from './components/slide8'
import Slide9 from './components/slide9'
import Slide10 from './components/slide10'
import Slide11 from './components/slide11'
import Slide11action from './components/slide11-action'
import Slide11reducer from './components/slide11-reducer'
import Slide11store from './components/slide11-store'
import Slide11relationship from './components/slide11-relationship'
import Slide12 from './components/slide12'
import Slide13 from './components/slide13'
import Slide14 from './components/slide14'

import './main.less'

render( (
	<div className="wrap">
		<Router history={hashHistory}>
			<Route path="/">
				<IndexRedirect to="/slide1" />
			</Route>
			<Route path="/slide1" component={Slide1} />
			<Route path="/slide2" component={Slide2}>
				<Route path="/slide2/jsx" component={Slide2jsx} />
				<Route path="/slide2/component" component={Slide2component} />
				<Route path="/slide2/virtual-dom" component={Slide2virtualDom} />
				<Route path="/slide2/data-flow" component={Slide2dataFlow} />
			</Route>
			<Route path="/slide3" component={Slide3} />
			<Route path="/slide4" component={Slide4} />
			<Route path="/slide5" component={Slide5} />
			<Route path="/slide6" component={Slide6} />
			<Route path="/slide7" component={Slide7} />
			<Route path="/slide8" component={Slide8} />
			<Route path="/slide9" component={Slide9} />
			<Route path="/slide10" component={Slide10} />
			<Route path="/slide11" component={Slide11}>
				<Route path="/slide11/action" component={Slide11action} />
				<Route path="/slide11/reducer" component={Slide11reducer} />
				<Route path="/slide11/store" component={Slide11store} />
				<Route path="/slide11/relationship" component={Slide11relationship} />
			</Route>
			<Route path="/slide12" component={Slide12} />
			<Route path="/slide13" component={Slide13} />
			<Route path="/slide14" component={Slide14} />
		</Router>
	</div>
	),
	document.getElementById("main")
)
