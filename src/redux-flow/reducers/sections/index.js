require('dotenv').config()
import { FETCHING_SECTION_DATA, FETCHING_SECTION_DATA_SUCCESS, FETCHING_SECTION_DATA_FAIL } from './actions'

export const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
}

const section = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SECTION_DATA: 
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            })
            
        case FETCHING_SECTION_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            })

        case FETCHING_SECTION_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: null,
                hasError: true,
                errorMessage: action.payload
            })

        default: return state
    }
}

export default section
