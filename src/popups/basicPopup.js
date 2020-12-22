import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Dialog } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    "& .MuiDialog-paperFullWidth": {
      width: "100%",
      margin: "25px",
    },
  },
}))

const BasicPopup = props => {
  const classes = useStyles()
  const { open, onClose, content, selectedValue } = props

  const handleClose = value => {
    onClose(value)
  }

  return (
    <Dialog className={classes.container} open={open} onClose={() => handleClose()} fullWidth={true}>
      <div>
        <ContentView>
          <Content>{content}</Content>
        </ContentView>

        <ButtonView>
          {selectedValue.map((item, idx) => {
            return (
              <Button key={idx} one={selectedValue.length === 2 && idx === 0} onClick={() => handleClose(item)}>
                {item}
              </Button>
            )
          })}
        </ButtonView>
      </div>
    </Dialog>
  )
}

BasicPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  selectedValue: PropTypes.array.isRequired,
}

export default BasicPopup

const ContentView = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 93px;
  padding: 0px 25px;

  & > p {
    text-align: center;
    white-space: pre;
  }
`

const Content = styled.p`
  color: #2d2f31;
  font-size: 14px;
  font-family: NanumSquareBold;
  line-height: 22.05px;
  letter-spacing: -0.42px;
`

const ButtonView = styled.section`
  display: flex;
  height: 50px;
`

const Button = styled.button`
  background-color: #ffffff;
  width: 100%;
  padding: 0px;
  border-top: 1px solid #dddde5;
  border-radius: 0;
  color: ${props => (props.one ? "#5e6a79" : "#ff499a")};
  font-size: 14px;
  font-family: NanumSquareExtraBold;
  line-height: 24.45px;
  letter-spacing: -0.42px;
`
