import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import ReduxThunk from "redux-thunk"
import penderMiddleware from "redux-pender"
import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage" // localStorage
import storageSession from "redux-persist/lib/storage/session" // sessionStorage
import reducers from "../reducers"

const logger = createLogger()

const persistConfig = {
  key: "root",
  storage: storageSession,
}

const enhancedReducer = persistReducer(persistConfig, reducers)

export const configureStore = createStore(enhancedReducer, applyMiddleware(logger, ReduxThunk, penderMiddleware()))
