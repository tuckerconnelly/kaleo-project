import React from 'react'

import ResultStat from './ResultStat'
import ResultTags from './ResultTags'

import * as Colors from 'material-ui/lib/styles/colors'

const styles = {
	minHeight: '6rem',
	padding: '0 1rem',

	lineHeight: '3rem'
}


export default ({ tag_names, views, answers, children }) => (
	<div style={styles}>
		<ResultStat style={{color: 'rgba(0,0,0,.54)'}} type="Views">{views}</ResultStat>
		<ResultStat style={{marginRight: '2rem', backgroundColor: answers > 0 ? Colors.green100 : 'transparent' }} type="Answers">{answers}</ResultStat>
		<div style={{ lineHeight: '4rem'}}>{children}</div>
		<ResultTags tag_names={tag_names} />
	</div>
)
