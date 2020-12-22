import { combineReducers } from "redux"
import { penderReducer } from "redux-pender"

import SampleReducer from "./sample"
import ConfigReducer from "./config"

export default combineReducers({
  pender: penderReducer,
  SampleReducer,
  ConfigReducer,
})
