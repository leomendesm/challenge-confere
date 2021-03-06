import { FETCHING_SPACE_DATA, FETCHING_SPACE_DATA_SUCCESS, FETCHING_SPACE_DATA_FAIL, SELECT_SPACE_OPTION } from './actions'

export const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
    selectedOption: null
}

const space = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SPACE_DATA: 
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            })
            
        case FETCHING_SPACE_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            })
        case SELECT_SPACE_OPTION:
            return Object.assign({}, state, {
                selectedOption: action.payload
            })

        case FETCHING_SPACE_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: null,
                hasError: true,
                errorMessage: action.payload
            })

        default: return state
    }
}

export default space
