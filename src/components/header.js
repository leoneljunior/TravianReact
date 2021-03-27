import React from 'react'
import logo from '../static/img/logo.png'

export class Header extends React.Component {
    render(){
        return (
            <div id="header">
                <img id="logo" alt="logo" src={logo} /><br/>
                PB War Portal
            </div>
      );
    }
}