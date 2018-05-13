import React, { Component } from 'react'
class Header extends Component {


    render () {
        return (
            <div>
            <h1 style={{color:this.props.themeColor }}>React.js 小书</h1>
            </div>
        )
    }
    
}


export default Header