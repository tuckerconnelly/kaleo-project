import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'
import debounce from 'debounce'

import {updateSearchText} from '../actions/app'
import {fetchQuestions} from '../actions/questions'

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

const Header = ({dispatch}) => {
	const debouncedDispatch = debounce((searchText) =>{
		if (searchText === '') return
		dispatch(fetchQuestions(searchText))
	}, 500)

	return <div style={styles.header}>
		<Paper zDepth={1}>
			<TextField
				style={styles.textField}
				hintStyle={{height: '3rem'}}
				underlineStyle={{display: 'none'}}
				hintText="Kaleo Search"
				onChange={(e) => {
					debouncedDispatch(e.target.value)
					dispatch(updateSearchText(e.target.value))
				}}
			></TextField>
		</Paper>
	</div>
}

export default connect()(Header)
