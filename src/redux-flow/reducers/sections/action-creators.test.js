import mockAxios from 'jest-mock-axios';
import FetchSectionData from "./action-creators";
import { APIURL, config } from './../../../utils'

afterEach(() => {
    mockAxios.reset();
})

it('should dispatch two times with success', () => {
    let dispatch = jest.fn(),
        id = 1
    
    FetchSectionData(dispatch, id)

    expect(mockAxios.get).toHaveBeenCalledWith(`${APIURL}v1/spaces/${id}/sections`, config)
    expect(dispatch).toHaveBeenCalledWith({"type": "FETCHING_SECTION_DATA"});

    let responseObj = { data: 'test' }
    mockAxios.mockResponse(responseObj)

    expect(dispatch).toHaveBeenCalledWith({"payload": "test", "type": "FETCHING_SECTION_DATA_SUCCESS"});

    expect(dispatch).not.toHaveBeenCalledWith({"payload": "error", "type": "FETCHING_SECTION_DATA_FAIL"});
})

it('should dispatch two times with fail', () => {
    let dispatch = jest.fn(),
        id = 1
    
    FetchSectionData(dispatch, id)

    expect(mockAxios.get).toHaveBeenCalledWith(`${APIURL}v1/spaces/${id}/sections`, config)
    expect(dispatch).toHaveBeenCalledWith({"type": "FETCHING_SECTION_DATA"});

    let responseObj = {msg: 'err'}
    mockAxios.mockError(responseObj)

    expect(dispatch).toHaveBeenCalledWith({"payload": "err", "type": "FETCHING_SECTION_DATA_FAIL"});

    expect(dispatch).not.toHaveBeenCalledWith({"payload": "error", "type": "FETCHING_SECTION_DATA_SUCCESS"});
})