import React from 'react';
import './App.css';
import {MyTable} from './components/myTable';

export class App extends React.Component {
    render(){
      return (
        <div>
          <div id="header">
            <img id="logo" alt="logo" src="logo.png" /><br/>
            PB War Portal
          </div>

          <div id="body"></div>

          <hr />
          <div>
            {/* <Header /> */}
            {/* <MyFilters /> */}
            <MyTable />
            <MyTable />
          </div>
        </div>
      );
    }
  };



