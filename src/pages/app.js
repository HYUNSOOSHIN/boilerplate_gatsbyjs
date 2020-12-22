import React, { useEffect } from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Page404 from "./404"
import Root from "../components/page/root"
import Sample from "../components/page/sample"
import "../components/layout.css"

// test
import { useDispatch } from "react-redux"
import { setScreenWidth } from "../actions/configAction"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // 초기 브라우저 width 셋팅
    dispatch(setScreenWidth(window.innerWidth > 500 ? 500 : window.innerWidth))
    // 브라우저 width 조절 시 셋팅
    window.addEventListener("resize", function (e) {
      dispatch(setScreenWidth(e.target.innerWidth))
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
