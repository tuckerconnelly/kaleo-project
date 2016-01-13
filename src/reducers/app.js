import { OPEN_MENU, CLOSE_MENU } from '../constants/ActionTypes'

const initialState = {
	menuOpen: false
}

export default (state = initialState, action) => {
	switch (action.type) {
	case OPEN_MENU:
		return {
			...state,
			menuOpen: true
		}

	case CLOSE_MENU:
		return {
			...state,
			menuOpen: false
		}

	default:
		return state
	}
}
