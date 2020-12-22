import { navigate } from "gatsby"
import cookie from "react-cookies"

const Index = () => {
  const token = cookie.load("access_token", { path: "/" })
  if (token === null || token === undefined) {
    navigate("/app/login")
  } else {
    navigate("/app/mainSearch")
  }

  return null
}

export default Index
