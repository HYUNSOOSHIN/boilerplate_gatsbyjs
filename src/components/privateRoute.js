import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import cookie from "react-cookies"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [token, setToken] = useState(cookie.load("access_token", { path: "/" }))

  useEffect(() => {
    const tk = cookie.load("access_token", { path: "/" })
    setToken(tk)

    if (tk === null || tk === undefined) {
      navigate("/app/login")
      return
    }
  }, [cookie.load("access_token", { path: "/" })])

  if (token === null || token === undefined) {
    return null
  } else return <Component location={location} {...rest} />
}

export default PrivateRoute
