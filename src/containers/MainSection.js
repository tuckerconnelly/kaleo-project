import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/lib/paper'
import Divider from 'material-ui/lib/divider'

import Result from '../components/Result'

const styles = {
	marginBottom: '2rem'
}

const MainSection = ({ style, questions }) => (
	<main style={{...styles, ...style}}>
		<Paper zDepth={1}>
			{
				questions.map((question) => (
					<div key={question.id}>
						<Result views={question.views_count} answers={question.answers_count} tag_names={question.tag_names}>{question.title}</Result>
						<Divider style={{width: '100%'}} />
					</div>
				))
			}
		</Paper>
	</main>
)

const mapStateToProps = (state) => ({
	style: {
		display: state.app.searchText.length === 0 ? 'none' : 'initial'
	},
	questions: state.questions
})

export default connect(
	mapStateToProps,
	null)(MainSection)
