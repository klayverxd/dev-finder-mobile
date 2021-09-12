import { combineReducers } from 'redux'

import fontSize from './fontSize'
import userReducer from './user'
import themeReducer from './theme'

const allReducers = combineReducers({
  fontSize,
  userReducer,
  themeReducer,
})

export default allReducers
