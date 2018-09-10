import axios from 'axios'
import { APIURL, config } from './../../../utils'
import { FETCHING_SECTION_DATA, FETCHING_SECTION_DATA_SUCCESS, FETCHING_SECTION_DATA_FAIL } from './actions'

const FetchSectionData = (dispatch, id) => {
    dispatch({ type: FETCHING_SECTION_DATA })
        let axiosPromise = axios.get(`${APIURL}v1/spaces/${id}/sections`, config)
        .then(res => { return dispatch({ type: FETCHING_SECTION_DATA_SUCCESS, payload: res.data })})
        .catch(err => { return dispatch({ type: FETCHING_SECTION_DATA_FAIL, payload: err.msg })})
        return(axiosPromise)
}

export default FetchSectionData
