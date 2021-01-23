import { createAction } from "redux-actions"

// Action Type
export const SET_LOADING = "@boilerplate/config/SET_LOADING"
export const SET_SCREEN_WIDTH = "@boilerplate/config/SET_SCREEN_WIDTH"

export const setLoading = createAction(SET_LOADING)
export const setScreenWidth = createAction(SET_SCREEN_WIDTH)
