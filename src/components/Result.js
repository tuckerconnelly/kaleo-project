import React from 'react'
import ResultStat from './ResultStat'

const styles = {
	height: '6rem',
	padding: '0 1rem',

	lineHeight: '3rem'
}

export default ({ children }) => (
	<div style={styles}>
		<ResultStat type="Views">0</ResultStat>
		<ResultStat type="Answers">1</ResultStat>
		<div style={{display: 'inline-block', height: '3rem', marginLeft: '1rem'}}>{children}</div><br />
		<ul style={{display: 'inline-block', height: '3rem', padding: '0', margin: '0 0 0 1rem', listStyleType:'none'}}>
			<li style={{display:'inline-block'}}>Tag</li>
			<li style={{display:'inline-block'}}>Tag</li>
			<li style={{display:'inline-block'}}>Tag</li>
		</ul>
	</div>
)
