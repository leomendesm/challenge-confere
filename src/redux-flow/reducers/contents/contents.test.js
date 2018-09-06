import section, { initialState } from './index'
import { FETCHING_CONTENT_DATA, FETCHING_CONTENT_DATA_SUCCESS, FETCHING_CONTENT_DATA_FAIL } from './actions'
import deepFreeze from 'deep-freeze'

describe('Section reducer', () => {

    describe('Smoke Test', () => {
        it('should section be a function', () => {
            expect(typeof section).toBe('function')
        })
    })

    describe('Initial State', () => {
        it('should return initial state when state is undefined', () => {
            const before = undefined
            const action = deepFreeze({ type: '' })
            const after = initialState
            expect(section(before, action)).toEqual(after)
        })

        it('should return state when action is undefined', () => {
            const before = deepFreeze([])
            const action = deepFreeze({ 
                type: ''})
            const after = []
            expect(section(before, action)).toEqual(after)
        })
    })

    describe('fetching data', () => {
        it('should return isFetching true', () => {
            const before = deepFreeze(initialState)
            const action = deepFreeze({ type: FETCHING_CONTENT_DATA })
            const after = {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            }
            expect(section(before, action)).toEqual(after);
        })

        it('should return success after fetching', () => {
            const before = deepFreeze(initialState)
            const action = deepFreeze({ type: FETCHING_CONTENT_DATA_SUCCESS, payload: ['a'] })
            const after = {
                isFetching: false,
                data: ['a'],
                hasError: false,
                errorMessage: null
            }
            expect(section(before, action)).toEqual(after);
        })

        it('should return isFetching false and error', () => {
            const before = deepFreeze(initialState)
            const action = deepFreeze({ type: FETCHING_CONTENT_DATA_FAIL, payload: '404' })
            const after = {
                isFetching: false,
                data: null,
                hasError: true,
                errorMessage: '404'
            }
            expect(section(before, action)).toEqual(after);
        })
    })
})
