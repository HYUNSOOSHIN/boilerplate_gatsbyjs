import axios from "axios"
import { navigate } from "gatsby"
// import { configureStore } from "../store"
// import { setLoading } from "../actions/configAction"
import { API_URL } from "../config/config"

const apiFunction = (method) => {
  return async (url, { body = {}, header = {}, token = "", loading = false } = {}) => {
    if (loading) {
      // configureStore.dispatch(setLoading(true))
    }
    try {
      const result = await axios({
        method: method,
        url: API_URL + url,
        data: body,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          ...header,
        },
        withCredentials: true,
      })
      return result
    } catch (err) {
      if (err.response) {
        console.log(err.response)
        if (err.response.status === 400) {
          return err.response.data
        } else if (err.response.status === 401) {
          navigate("/app/login")
          return err.response
        } else if (err.response.status === 403) {
          navigate("/app/login")
          return err.response
        }
      }
    } finally {
      if (loading) {
        // configureStore.dispatch(setLoading(false))
      }
    }
  }
}

const api = {
  post: apiFunction("POST"),
  get: apiFunction("GET"),
  delete: apiFunction("DELETE"),
  patch: apiFunction("PATCH"),
}

export default api
