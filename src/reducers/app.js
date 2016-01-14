import { UPDATE_SEARCH_TEXT } from '../constants/ActionTypes'

const initialState = {
	searchText: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
	case UPDATE_SEARCH_TEXT:
		return {
			...state,
			searchText: action.payload
		}
	default:
		return state
	}
}
