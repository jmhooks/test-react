import React, {Component} from 'react'
import {banner} from './styles/style'

export default class Banner extends Component{
  render() {
    return (
      <div style={banner.banner}>
        <div style={banner.title}>{this.props.title}</div>
      </div>
    )
  }
}
