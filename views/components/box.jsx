import React, {Component} from 'react';
import {statusBox} from './styles/style'

export default class Box extends Component {
  render() {
    return (
      <div style={statusBox.box}>
        <Title title={this.props.status} />
        <Description desc={this.props.desc} />
      </div>
    )
  }
}

class Title extends Component {
  render() {
    return (
      <div style={determineStatus(this.props.title)}>{this.props.title}</div>
    )
  }
}

class Description extends Component {
  render() {
    return (
      <div style={statusBox.description}>{this.props.desc}</div>
    )
  }
}

const determineStatus = (status) => {
  switch(status) {
    case "ERROR":
      return statusBox.titleError
      break
    case "WARNING":
      return statusBox.titleWarning
      break
    case "UNKNOWN":
      return statusBox.titleUnknown
      break
    case "SUCCESS":
      return statusBox.titleSuccess
      break
    default:
      return statusBox.titleUnknown
  }
}
