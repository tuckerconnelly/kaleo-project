import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'

const styles = {
	header: {
		marginBottom: '2rem'
	},
	textField: {
		width: '100%',
		height: '6rem',
		padding: '0 1rem'
	}
}

const Header = () => (
	<div style={styles.header}>
		<Paper zDepth={1}>
			<TextField
				style={styles.textField}
				hintStyle={{height: '3rem'}}
				underlineStyle={{display: 'none'}}
				hintText="Kaleo Search"
				dataSource={[]}
			></TextField>
		</Paper>
	</div>
)
export default connect()(Header)
