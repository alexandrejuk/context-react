import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import { FilterProvider } from './filterState'
import { LoginProvider } from './loginState'

class App extends Component {
  state = {
    name: 'Vitor Lima',
    login: 'alexanre'
  }

  render() {
    return (
      <FilterProvider value={this.state}>
        <LoginProvider value={this.state}>
          <Button age='10'/>
        </LoginProvider>
      </FilterProvider>
    )
  }
}

export default App;
