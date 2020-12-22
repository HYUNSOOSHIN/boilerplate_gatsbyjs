import React from "react"
import styled from "styled-components"

const Header = props => {
  const { isHeader = true, title, leftComponent = null, rightComponent = null } = props

  return (
    <Container on={isHeader ? "on" : "off"}>
      <div style={{ display: "flex", flex: 1, justifyContent: "flex-start", alignItems: "center" }}>{leftComponent ? leftComponent : null}</div>
      <TitleBox>
        <p>{title}</p>
      </TitleBox>
      <div style={{ display: "flex", flex: 1, justifyContent: "flex-end", alignItems: "center" }}> {rightComponent ? rightComponent : null}</div>
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

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
`
