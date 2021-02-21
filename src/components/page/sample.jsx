import React, { useState } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { WidthToDP } from "../../utils/util"
import SEO from "../seo"
import SampleContainer from "../../containers/sampleContainer"
import Layout from "../component/common/layout"
import Button from "../component/button"
import BasicPopup from "../../popups/basicPopup"

const Sample = (props) => {
  const screenWidth = useSelector((state) => state.ConfigReducer.screenWidth)
  const { sample, setSample } = props
  const [popup, setPopup] = useState(false)

  return (
    <Layout
      title="샘플"
      leftComponent={
        <>
          <button style={{ marginLeft: "15px" }}>버튼</button>
        </>
      }
      rightComponent={null}
    >
      <SEO title="샘플페이지" />
      <BasicPopup
        open={popup}
        onClose={(value) => {
          if (value === "ㅇㅇ") {
            setPopup(false)
          }
        }}
        content={"기본 팝업입니다.\n닫으시겠습니까?"}
        selectedValue={["ㄴㄴ", "ㅇㅇ"]}
      />
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Number>{sample}</Number>
      </section>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button onClick={() => setSample(sample - 1)}>minus</Button>
        <Button onClick={() => setSample(sample + 1)}>plus</Button>
      </section>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button onClick={() => setPopup(true)}>기본 팝업 열기</Button>
      </section>
      <section>
        <p>화면 넓이 : {screenWidth}</p>
        <p style={{ marginTop: "10px" }}>제플린 360기준 > width: 50, height: 50</p>
        <div
          style={{
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: WidthToDP(50),
            height: WidthToDP(50),
          }}
        />
      </section>
    </Layout>
  )
}

export default SampleContainer(Sample)

const Number = styled.p`
  color: #000000;
  font-size: 20px;
  font-family: NanumSquareBold;
`
