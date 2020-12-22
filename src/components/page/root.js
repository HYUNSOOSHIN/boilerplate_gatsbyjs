import { navigate } from "gatsby"
import cookie from "react-cookies"

const Root = () => {
  const token = cookie.load("access_token", { path: "/" })
  if (token === null || token === undefined) {
    navigate("/app/sample")
  } else {
    navigate("/app/sample")
  }

  return null
}

export default Root
