import React from 'react'

const styles = {
	display: 'inline-block',
	padding: '.5rem 1rem',
	margin: '.5rem .5rem .5rem 0',

	fontSize: '1.2rem',
	lineHeight: '2rem',
	textAlign: 'center',
	float: 'right'
}

export default ({ style, type, children }) => (
	<div style={{...styles, ...style}}>
		{children}<br />
		{type}
	</div>
)
