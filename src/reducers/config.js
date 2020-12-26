import { handleActions } from "redux-actions"
import actions from "../actions"

// action type load
const { SET_LOADING } = actions.ConfigAction

// default state value
const initialState = {
  loading: false,
}

// handle action
export default handleActions(
  {
    [SET_LOADING]: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
  initialState
)
