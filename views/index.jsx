import React, {Component} from 'react'
import Box from './components/box'
import Banner from './components/banner'
import ButtonBox from './components/buttonbox'
import {body} from './components/styles/style'

export default class TestApp extends Component{
  render() {
    let data = this.props.data.map((o) => {
      return <Box status={o.status} desc={o.description} key={o.key}></Box>
    });
    return (
      <html>
        <head>
        <title>
          TestApp
        </title>
      </head>
        <body style={body}>
          <div>
            <Banner title="Test Bar 1" />
            <Banner title="Test Bar 2" />
            <ButtonBox />
            <ButtonBox />
            {data}
            <Banner title="Test Bar 3" />
          </div>
        </body>
      </html>

    )
  }
}
