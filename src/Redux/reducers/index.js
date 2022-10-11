// 引入Redux的combineReducer用于将reducer组合起来

import counterReducer from './counterReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
})

export default allReducers
