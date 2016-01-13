import React from 'react'
import { connect } from 'react-redux'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'

import { closeMenu } from '../actions/app'

const Nav = ({ menuOpen, dispatch }) => (
	<LeftNav
		open={menuOpen}
		docked={false}
		onRequestChange={() => { dispatch(closeMenu()) }}
	>
		<MenuItem onTouchTap={() => { dispatch(closeMenu()) }}>Menu Item</MenuItem>
		<MenuItem onTouchTap={() => { dispatch(closeMenu()) }}>Menu Item 2</MenuItem>
	</LeftNav>
)

const mapStateToProps = (state) => ({
	menuOpen: state.app.menuOpen
})

export default connect(mapStateToProps, null)(Nav)
