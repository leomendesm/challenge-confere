import space, { initialState } from './index'
import { FETCHING_SPACE_DATA, FETCHING_SPACE_DATA_SUCCESS, FETCHING_SPACE_DATA_FAIL, SELECT_SPACE_OPTION } from './actions'
import deepFreeze from 'deep-freeze'

describe('Space reducer', () => {

    describe('Smoke Test', () => {
        it('should space be a function', () => {
            expect(typeof space).toBe('function')
        })
    })

    describe('Initial State', () => {
        it('should return initial state when state is undefined', () => {
            const before = undefined
            const action = deepFreeze({ type: '' })
            const after = initialState
            expect(space(before, action)).toEqual(after)
        })

        it('should return state when action is undefined', () => {
            const before = deepFreeze([])
            const action = deepFreeze({ 
                type: ''})
            const after = []
            expect(space(before, action)).toEqual(after)
        })
    })

    describe('fetching data', () => {
        it('should return isFetching true', () => {
            const before = deepFreeze(initialState)
            const action = deepFreeze({ type: FETCHING_SPACE_DATA })
            const after = {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null,
                selectedOption: null
            }
            expect(space(before, action)).toEqual(after);
        })

        it('should return success after fetching', () => {
            const before = deepFreeze(initialState)
            const action = deepFreeze({ type: FETCHING_SPACE_DATA_SUCCESS, payload: ['a'] })
            const after = {
                isFetching: false,
                data: ['a'],
                hasError: false,
                errorMessage: null,
                selectedOption: null
            }
            expect(space(before, action)).toEqual(after);
        })

        it('should return isFetching false and error', () => {
            const before = deepFreeze(initialState)
            const action = deepFreeze({ type: FETCHING_SPACE_DATA_FAIL, payload: '404' })
            const after = {
                isFetching: false,
                data: null,
                hasError: true,
                errorMessage: '404',
                selectedOption: null
            }
            expect(space(before, action)).toEqual(after);
        })

        it('should change select option when SELECT_SPACE_OPTION is called with a payload', () => {
            const before = deepFreeze(initialState)
            const action = deepFreeze({ type: SELECT_SPACE_OPTION, payload: 'a' })
            const after = {
                isFetching: null,
                data: [],
                hasError: false,
                errorMessage: null,
                selectedOption: 'a'
            }
            expect(space(before, action)).toEqual(after);
        })
    })
})
