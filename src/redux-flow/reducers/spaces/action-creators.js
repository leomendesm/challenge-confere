import axios from 'axios'
import { APIURL, config } from './../../../utils'
import { FETCHING_SPACE_DATA, FETCHING_SPACE_DATA_SUCCESS, FETCHING_SPACE_DATA_FAIL } from './actions'

const FetchSpaceData = (dispatch) => {
    dispatch({ type: FETCHING_SPACE_DATA })
        let axiosPromise = axios.get(`${APIURL}v2/spaces`, config)
        .then(res => { return dispatch({ type: FETCHING_SPACE_DATA_SUCCESS, payload: res.data })})
        .catch(err => { return dispatch({ type: FETCHING_SPACE_DATA_FAIL, payload: err.msg })})
        return(axiosPromise)
}

export default FetchSpaceData
