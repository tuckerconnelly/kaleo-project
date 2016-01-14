import { RECEIVE_QUESTIONS } from '../constants/ActionTypes'

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
	case RECEIVE_QUESTIONS:
		return action.payload
	default:
		return state
	}
}
