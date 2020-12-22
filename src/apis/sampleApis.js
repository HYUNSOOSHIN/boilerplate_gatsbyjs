import api from "../utils/api"
import cookie from "react-cookies"

//get샘플
const getSample = async data => {
  const token = await cookie.load("access_token", { path: "/" })
  const result = await api.get(`/sample?query=${data}`, {
    token: token,
  })
  return result.data
}
//post샘플
const postSample = async data => {
  const token = await cookie.load("access_token", { path: "/" })
  const result = await api.post(`/sample`, {
    body: data,
    token: token,
  })
  return result.data
}

export default {
  getSample,
  postSample,
}
