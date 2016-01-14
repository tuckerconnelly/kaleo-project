import React, {Component} from 'react'
import Radium from 'radium'

const style = {
	resultTags: {
		padding: '0',
		margin: '0 0 0 0',

		color: 'rgba(0,0,0,.54)',
		fontSize:'1.2rem',
		lineHeight: '1rem',

		listStyleType:'none'
	},
	tag: {
		display: 'inline-block',
		marginRight: '.5rem',

		cursor: 'pointer',

		':hover': {
			textDecoration: 'underline'
		}
	}
}

@Radium
export default class ResultTags extends Component {
	render() {
		return <ul style={style.resultTags}>
			{
				this.props.tag_names.map((tag) => {
					return <li key={tag} style={style.tag}>{tag}</li>
				})
			}
		</ul>
	}

}
