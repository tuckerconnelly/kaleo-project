import * as types from '../constants/ActionTypes'

export function updateSearchText(text) {
	return { type: types.UPDATE_SEARCH_TEXT, payload: text }
}
