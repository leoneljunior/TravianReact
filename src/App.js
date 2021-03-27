import React from 'react';
import './App.css';
import {MyTable} from './components/myTable';
import {Header} from './components/header';
import {Root} from './components/root';
import {MyFilters} from './components/myFilters';
import Select from "react-select";


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 0, selectedOption: 'distancia'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let target;
    if(event.target) {
      target = event.target;   
    } else{
      target = event; 
    }
    
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.x + this.state.y);
    event.preventDefault();
  }  

  options = [
    { id: "1", value: "nickname", label: "Jogador", name: 'selectedOption' },
    { id: "2", value: "aldeia", label: "Aldeia", name: 'selectedOption' },
    { id: "3", value: "army", label: "Tropas", name: 'selectedOption' },
    { id: "4", value: "distancia", label: "Distancia", name: 'selectedOption' }
  ];

  handleChangeOption = sort => {
    this.setState({ sort });
  };
  
  render(){
      return (
        <div>
          <Header />
         
          <div id="body">

            <form onSubmit={this.handleSubmit}>
              <label>
                Adicione às coordenadas aqui:<br />
                X: <input type="number " name="x" value={this.state.x} onChange={this.handleChange} />
                Y: <input type="number" name="y" value={this.state.y} onChange={this.handleChange} />
              </label>
            </form><br />

            <hr />
            <div style={{width: 400}}>
              <MyFilters />
                Buscar por Jogador:<br />
                <input type="text" name="filterStr" value={this.state.filterStr} onChange={this.handleChange} /> <br /><br />
                Ordenar por:<br />
                <Select
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                  options={this.options}
                />
            </div>
            <MyTable filterStr={this.state.filterStr} sort={this.state.selectedOption} x={this.state.x} y={this.state.y} />
            <Root />
          </div>
        </div>
      );
    }
  };