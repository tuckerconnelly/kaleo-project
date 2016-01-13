import React from 'react'

const styles = {
	display: 'inline-block',
	margin: '1rem 1rem 1rem 0',

	fontSize: '1.2rem',
	lineHeight: '2rem',
	textAlign: 'center',
	float: 'left'
}

export default ({ type, children }) => (
	<div style={styles}>
		{children}<br />
		{type}
	</div>
)
