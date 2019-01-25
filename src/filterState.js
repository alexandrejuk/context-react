import React from 'react'

const { Consumer, Provider } = React.createContext()

const withFilteState = Component => props => (
  <Consumer>
    {
      (state) => <Component
        {...props}
        {...state}
      />
    }
  </Consumer>
)

export {
  Provider as FilterProvider,
  withFilteState,
}