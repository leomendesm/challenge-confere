import { combineReducers } from 'redux'

import contents from './contents'
import sections from './sections'
import spaces from './spaces'

export default combineReducers({contents, sections, spaces})