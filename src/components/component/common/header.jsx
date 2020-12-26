import React from "react"
import styled from "styled-components"

const Header = props => {
  const { isHeader = true, title, leftComponent = null, rightComponent = null } = props

  return (
    <Container on={isHeader ? "on" : "off"}>
      <ComponentBox>{leftComponent ? leftComponent : null}</ComponentBox>
      <TitleBox>
        <p>{title}</p>
      </TitleBox>
      <ComponentBox> {rightComponent ? rightComponent : null}</ComponentBox>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: ${props => (props.on === "on" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`

const ComponentBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  & > p {
    color: #000;
    font-size: 20px;
    font-family: NanumSquareBold;
  }
`
