import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/container'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
  document.getElementById('root')
);
