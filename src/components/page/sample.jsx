import React, { useState } from "react"
import styled from "styled-components"
import SampleContainer from "../../containers/sampleContainer"
import Layout from "../component/common/layout"
import SEO from "../seo"
import BasicPopup from "../../popups/basicPopup"

const Sample = props => {
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
        onClose={value => {
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
    </Layout>
  )
}

export default SampleContainer(Sample)

const Number = styled.p`
  color: #000000;
  font-size: 20px;
  font-family: NanumSquareBold;
`

const Button = styled.button`
  margin: 5px;
  padding: 5px;
  border: 1px solid #dbdbdb;
  color: #000000;
  font-size: 20px;
  font-family: NanumSquareBold;
`
