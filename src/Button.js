import React, { Component } from 'react'
import { withFilteState } from './filterState'
import { withLoginState } from './loginState'

class Button extends Component {
  render() { 
    return (
      <button>
        {this.props.name}
        {this.props.age}
        {this.props.login}
      </button>
    )
  }
}

export default withLoginState(withFilteState(Button))