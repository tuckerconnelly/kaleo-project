import React, { Component } from 'react'

import Header from '../containers/Header'
import MainSection from '../containers/MainSection'

var styles = {
	display: 'flex',
	height: '100%',
	padding: '1rem 2rem',
	boxSizing: 'border-box',

	flexDirection: 'column'
}

export default class App extends Component {
	render() {
		return <div style={styles}>
				<Header />
				<MainSection />
			</div>
	}
}
