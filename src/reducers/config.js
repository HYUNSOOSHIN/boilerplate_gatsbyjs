import { handleActions } from "redux-actions"
import actions from "../actions"

// action type load
const { SET_LOADING, SET_SCREEN_WIDTH } = actions.ConfigAction

// default state value
const initialState = {
  loading: false,
  screenWidth: 0,
}

// handle action
export default handleActions(
  {
    [SET_LOADING]: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    [SET_SCREEN_WIDTH]: (state, action) => ({
      ...state,
      screenWidth: action.payload,
    }),
  },
  initialState
)
