import expect from 'expect'
import * as types from '../../src/constants/ActionTypes'
import * as actions from '../../src/actions/app'

describe('app actions', () => {
	it('openMenu should create OPEN_MENU action', () => {
		expect(actions.openMenu()).toEqual({
			type: types.OPEN_MENU
		})
	})

	it('closeMenu should create CLOSE_MENU action', () => {
		expect(actions.closeMenu()).toEqual({
			type: types.CLOSE_MENU
		})
	})
})
