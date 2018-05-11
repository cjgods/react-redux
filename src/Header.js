import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {

    static contextTypes = {
        store: PropTypes.object
      }
  
    constructor(){
        super()
        this.store={themeColor:''}
    }

    componentWillMount(){
        console.info(this.context)
    //  this._updateThemeColor()
    }
    
    _updateThemeColor(){
       
        const { store } = this.context
       
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }

    render () {
        return (
            <div>
            <h1 >React.js 小书</h1>
            </div>
        )
    }
}

export default Header