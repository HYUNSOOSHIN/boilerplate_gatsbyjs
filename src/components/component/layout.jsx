import React from "react"
import styled from "styled-components"
import Header from "./header"

const Layout = (props) => {
  const { children } = props
  // header
  const { isHeader = true, title = "", leftComponent = null, rightComponent = null } = props

  return (
    <Container>
      <Header isHeader={isHeader} title={title} leftComponent={leftComponent} rightComponent={rightComponent} />
      <ChildContainer>{children}</ChildContainer>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ChildContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
`
