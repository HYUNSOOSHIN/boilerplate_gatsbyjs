import React, { useEffect } from "react"
import { Router } from "@reach/router"
import { useDispatch } from "react-redux"
import { setScreenWidth } from "../actions/configAction"
import PrivateRoute from "../components/privateRoute"
import Page404 from "./404"
import Root from "../components/page/root"
import Sample from "../components/page/sample"
import "../components/layout.css"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(setScreenWidth(window.innerWidth))
    })

    return () =>
      window.removeEventListener("resize", () => {
        dispatch(setScreenWidth(window.innerWidth))
      })
  }, [])

  return (
    <Router basepath="/app" style={{ width: "100%", height: "100%" }}>
      {/* 로그인/회원가입 */}
      <Root path="/" />
      <Sample path="/sample" />
      {/* 설정 이외의 경로로 들어갈 경우 404 페이지 띄움 */}
      <Page404 path="/*" />
    </Router>
  )
}

export default App
