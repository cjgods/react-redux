import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import Header from './containers/Header'
import Content from './containers/Content'
import registerServiceWorker from './registerServiceWorker';



  
  //改变主题
  const themeReducer = (state, action) => {
    if (!state) return {
      themeColor: 'blue'
    }
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
  }
  
  const store = createStore(themeReducer)


class Index extends Component {

  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
