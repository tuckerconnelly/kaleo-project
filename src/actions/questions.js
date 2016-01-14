import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function receiveQuestions(questions) {
	return {
		type: types.RECEIVE_QUESTIONS,
		payload: questions
	}
}

export function fetchQuestions(searchText) {
	return (dispatch) => {
		return fetch('https://demo1.kaleosoftware.com/v4/search.json?sitemap_token=123456789&sitemap=sales&term='+encodeURIComponent(searchText))
			.then( (response) => response.json() )
			.then( (json) => {
				dispatch(receiveQuestions(json.collection))
			})
	}
}
