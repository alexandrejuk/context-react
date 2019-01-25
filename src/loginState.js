import React from 'react'

const { Consumer, Provider } = React.createContext()

const withLoginState = Component => props => (
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
  Provider as LoginProvider,
  withLoginState,
}