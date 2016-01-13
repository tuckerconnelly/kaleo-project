import React from 'react'
import Paper from 'material-ui/lib/paper'
import Divider from 'material-ui/lib/divider'

import Result from './Result'

var styles = {
	height: '100%'
}

export default () => (
	<main style={styles}>
		<Paper zDepth={1}>
			<Result>Result 1</Result>
			<Divider style={{width: '100%'}} />
			<Result>Result 2</Result>
		</Paper>
	</main>
)
