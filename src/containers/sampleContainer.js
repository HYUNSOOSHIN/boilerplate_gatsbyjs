import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import actions from "../actions"

const { setSample } = actions.SampleAction

// redux state > component mapping
const mapStateToProps = state => ({
  sample: state.SampleReducer.sample,
})

// redux action > component mapping
const mapDispatchToProps = dispatch => ({
  setSample: param => dispatch(setSample(param)),
})

const WithHoc = ChildComponent => props => {
  return <ChildComponent {...props} />
}

const hoc = connect(mapStateToProps, mapDispatchToProps)

export default compose(hoc, WithHoc)
