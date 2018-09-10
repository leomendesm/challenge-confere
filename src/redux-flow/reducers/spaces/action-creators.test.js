import mockAxios from 'jest-mock-axios';
import FetchSpaceData, {SetSpaceOption} from "./action-creators";
import { APIURL, config } from './../../../utils'

afterEach(() => {
    mockAxios.reset();
})
describe('FetchSpaceData tests', () => {

    it('should dispatch two times with success', () => {
        let dispatch = jest.fn()
        
        FetchSpaceData(dispatch)
        
        expect(mockAxios.get).toHaveBeenCalledWith(`${APIURL}v2/spaces`, config)
        expect(dispatch).toHaveBeenCalledWith({"type": "FETCHING_SPACE_DATA"});
        
        let responseObj = { data: 'test' }
        mockAxios.mockResponse(responseObj)
        
        expect(dispatch).toHaveBeenCalledWith({"payload": "test", "type": "FETCHING_SPACE_DATA_SUCCESS"});
        
        expect(dispatch).not.toHaveBeenCalledWith({"payload": "error", "type": "FETCHING_SPACE_DATA_FAIL"});
    })
    
    it('should dispatch two times with fail', () => {
        let dispatch = jest.fn()
        
        FetchSpaceData(dispatch)
        
        expect(mockAxios.get).toHaveBeenCalledWith(`${APIURL}v2/spaces`, config)
        expect(dispatch).toHaveBeenCalledWith({"type": "FETCHING_SPACE_DATA"});
        
        let responseObj = {msg: 'err'}
        mockAxios.mockError(responseObj)
        
        expect(dispatch).toHaveBeenCalledWith({"payload": "err", "type": "FETCHING_SPACE_DATA_FAIL"});
        
        expect(dispatch).not.toHaveBeenCalledWith({"payload": "error", "type": "FETCHING_SPACE_DATA_SUCCESS"});
    })  
})

describe('SetSpaceOption', () => {
    it('should dispatch with a value setted', ()=>{
        let dispatch = jest.fn(),
        value = 'a'
        SetSpaceOption(dispatch, value)  
        expect(dispatch).toHaveBeenCalledWith({"payload": value, "type": "SELECT_SPACE_OPTION"})
    })
})