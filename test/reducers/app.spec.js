import expect from 'expect'
import app from '../../src/reducers/app'
import * as types from '../../src/constants/ActionTypes'

describe('app reducer', () => {
	it('should handle initial state', () => {
		expect(
			app(undefined, {})
		).toEqual({
			menuOpen: false
		})
	})

	it('should handle OPEN_MENU', () => {
		expect(
			app({ menuOpen: false }, {
				type: types.OPEN_MENU
			})
		).toEqual({
			menuOpen: true
		})
	})

	it('should handle CLOSE_MENU', () => {
		expect(
			app({ menuOpen: true }, {
				type: types.CLOSE_MENU
			})
		).toEqual({
			menuOpen: false
		})
	})
})
