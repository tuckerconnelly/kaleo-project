import React, { Component } from 'react'

import Header from '../containers/Header'
import Nav from '../containers/Nav'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'

var styles = {
	display: 'flex',
	height: '100%',
	padding: '1rem 2rem',

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
