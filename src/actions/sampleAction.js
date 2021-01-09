import { createAction } from "redux-actions"
import sampleApi from "../apis/sampleApis"

// action type
export const SET_SAMPLE = "@newProject/sample/SET_SAMPLE"

// action function
export const setSample = createAction(SET_SAMPLE)

// action api function
export const getSample = (param) => async (dispatch) => {
  const result = await sampleApi.getSample(param)
  if (result) {
    dispatch(setSample(result))
    return true
  } else return false
}

export const postSample = (param) => async (dispatch) => {
  const result = await sampleApi.postSample(param)
  if (result) {
    return true
  } else return false
}
