import React, {Component} from 'react';
import {buttonBox} from './styles/style'

export default class ButtonBox extends Component {
  render() {
    return (
      <div style={buttonBox.box}>
        <Button title="Success" keyVal="B1"/>
        <Button title="Warning" keyVal="B2" />
        <Button title="Error" keyVal="B3" />
        <Button title="Unknown" keyVal="B4" />
      </div>
    )
  }
}

class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Hello');
  }

  render() {
    return (
      <button style={buttonBox.button} key={this.props.keyVal} onClick={() => {this.handleClick}}>{this.props.title}</button>
    )
  }
}
