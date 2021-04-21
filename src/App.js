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
    { id: "4", value: "distancia", label: "Distancia", name: 'selectedOption' },
    { id: "4", value: "Catapultas", label: "Catapultas", name: 'selectedOption' },
    { id: "4", value: "tesouraria", label: "Tesouraria", name: 'selectedOption' }
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
                Adicione às coordenadas aqui:<br /><br />
                X: <input type="number " name="x" value={this.state.x} onChange={this.handleChange} style={{width:'50px'}}/> - 
                Y: <input type="number" name="y" value={this.state.y} onChange={this.handleChange} style={{width:'50px'}}/>
              </label>
            </form><br />

            <hr />
            <div style={{width: 400, margin:'auto'}}>
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
            <div style={{float:'left'}}>
            <h2>Aldeias Atacantes</h2>
              <MyTable type="1" data={aldeiasAtacantes} tableHeader={tableHeadAtacantes} filterStr={this.state.filterStr} sort={this.state.selectedOption} x={this.state.x} y={this.state.y} />
            </div>
            <div style={{float:'right'}}>
              <h2>Aldeias Defensoras</h2>
              <MyTable type="2" data={aldeiasDefensoras} tableHeader={tableHeadDefensores} filterStr={this.state.filterStr} sort={this.state.selectedOption} x={this.state.x} y={this.state.y} />
            </div>
            <Root />
          </div>
        </div>
      );
    }
  };

  const tableHeadAtacantes = (
    <tr>
      <th>Jogador</th>
      <th>X | Y</th>
      <th>Tesouraria</th>
      <th>Tesouraria X | Y</th>
      <th>Catapultas</th>
      <th>Distancia</th>      
    </tr>);
 
const tableHeadDefensores = (
  <tr>
    <th>Jogador</th>
    <th>X | Y</th>
    <th>Tropas</th>
    <th>Distancia</th>      
  </tr>);

  const aldeiasAtacantes = [
    {
      "nickname": "curdio",
      "x": -49,
      "y": 92,
      "tesouraria": 10,
      "tesouraria_x": -49,
      "tesouraria_y": 92,
      "Catapultas": 1600
    },
    {
      "nickname": "curdio",
      "x": -49,
      "y": 92,
      "tesouraria": 10,
      "tesouraria_x": -42,
      "tesouraria_y": 92,
      "Catapultas": 1600
    },
    {
      "nickname": "Jara",
      "x": -23,
      "y": 26,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 100
    },
    {
      "nickname": "trovao18",
      "x": -18,
      "y": 83,
      "tesouraria": 9,
      "tesouraria_x": -18,
      "tesouraria_y": 83,
      "Catapultas": 1600
    },
    {
      "nickname": "Caçador",
      "x": -31,
      "y": -29,
      "tesouraria": 10,
      "tesouraria_x": -31,
      "tesouraria_y": -29,
      "Catapultas": 100
    },
    {
      "nickname": "Heitor Troiano",
      "x": -25,
      "y": 24,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 115
    },
    {
      "nickname": "SirGoncalves",
      "x": -31,
      "y": 58,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 18
    },
    {
      "nickname": "Digaobd",
      "x": -3,
      "y": 13,
      "tesouraria": 10,
      "tesouraria_x": -3,
      "tesouraria_y": 13,
      "Catapultas": 650
    },
    {
      "nickname": "Digaobd",
      "x": -30,
      "y": -11,
      "tesouraria": 10,
      "tesouraria_x": -3,
      "tesouraria_y": 13,
      "Catapultas": 650
    },
    {
      "nickname": "Miguel3532",
      "x": -17,
      "y": -47,
      "tesouraria": 1,
      "tesouraria_x": -17,
      "tesouraria_y": -47,
      "Catapultas": 130
    },
    {
      "nickname": "Maligno",
      "x": -46,
      "y": -32,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 40
    },
    {
      "nickname": "Kule",
      "x": 35,
      "y": 68,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 200
    },
    {
      "nickname": "Raito",
      "x": -17,
      "y": -37,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 24
    },
    {
      "nickname": "jacaestou",
      "x": 11,
      "y": 43,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 60
    },
    {
      "nickname": "CaféFrio",
      "x": -33,
      "y": -75,
      "tesouraria": 10,
      "tesouraria_x": -63,
      "tesouraria_y": -185,
      "Catapultas": 144
    },
    {
      "nickname": "CaféFrio",
      "x": -33,
      "y": -75,
      "tesouraria": 5,
      "tesouraria_x": -33,
      "tesouraria_y": -75,
      "Catapultas": 144
    },
    {
      "nickname": "Fortunee",
      "x": -32,
      "y": -6,
      "tesouraria": 5,
      "tesouraria_x": -32,
      "tesouraria_y": -6,
      "Catapultas": 150
    },
    {
      "nickname": "Saca",
      "x": -35,
      "y": 37,
      "tesouraria": 10,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 700
    },
    {
      "nickname": "Dunkirck",
      "x": -8,
      "y": 113,
      "tesouraria": 10,
      "tesouraria_x": -8,
      "tesouraria_y": 113,
      "Catapultas": 350
    },
    {
      "nickname": "Stark",
      "x": -79,
      "y": -49,
      "tesouraria": 10,
      "tesouraria_x": -87,
      "tesouraria_y": -55,
      "Catapultas": 250
    },
    {
      "nickname": "Stark",
      "x": -79,
      "y": -49,
      "tesouraria": 2,
      "tesouraria_x": -79,
      "tesouraria_y": -49,
      "Catapultas": 250
    },
    {
      "nickname": "ThescoxD",
      "x": -39,
      "y": -28,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 300
    },
    {
      "nickname": "Micalateia",
      "x": -21,
      "y": -65,
      "tesouraria": 10,
      "tesouraria_x": -21,
      "tesouraria_y": -65,
      "Catapultas": 271
    },
    {
      "nickname": "lucaseliana",
      "x": -16,
      "y": 97,
      "tesouraria": 12,
      "tesouraria_x": -16,
      "tesouraria_y": 97,
      "Catapultas": 250
    },
    {
      "nickname": "ikill_agg",
      "x": -15,
      "y": 0,
      "tesouraria": 9,
      "tesouraria_x": -27,
      "tesouraria_y": -18,
      "Catapultas": 5
    },
    {
      "nickname": "ikill_agg",
      "x": -15,
      "y": 0,
      "tesouraria": 9,
      "tesouraria_x": -26,
      "tesouraria_y": -14,
      "Catapultas": 5
    },
    {
      "nickname": "Dylan",
      "x": -28,
      "y": 51,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 60
    },
    {
      "nickname": "Ratxinho23",
      "x": -50,
      "y": 37,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 25
    },
    {
      "nickname": "cururuteitei",
      "x": -17,
      "y": 31,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 50
    },
    {
      "nickname": "ZeTeutao3000r",
      "x": -2,
      "y": 81,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 30
    },
    {
      "nickname": "Replause",
      "x": -25,
      "y": 40,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 10
    },
    {
      "nickname": "triton",
      "x": -60,
      "y": 120,
      "tesouraria": 6,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 100
    },
    {
      "nickname": "J Martins",
      "x": -50,
      "y": -34,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 272
    },
    {
      "nickname": "Jonas",
      "x": -34,
      "y": 61,
      "tesouraria": 10,
      "tesouraria_x": -34,
      "tesouraria_y": 61,
      "Catapultas": 250
    },
    {
      "nickname": "Jonas",
      "x": -34,
      "y": 61,
      "tesouraria": 10,
      "tesouraria_x": -32,
      "tesouraria_y": 64,
      "Catapultas": 250
    },
    {
      "nickname": "Peras",
      "x": -90,
      "y": -10,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 150
    },
    {
      "nickname": "cozaeloza",
      "x": -22,
      "y": 74,
      "tesouraria": 2,
      "tesouraria_x": -23,
      "tesouraria_y": 44,
      "Catapultas": 50
    },
    {
      "nickname": "jmrf",
      "x": -66,
      "y": 55,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 12
    },
    {
      "nickname": "tamtom",
      "x": -18,
      "y": 54,
      "tesouraria": 10,
      "tesouraria_x": -18,
      "tesouraria_y": 54,
      "Catapultas": 40
    },
    {
      "nickname": "schtybi",
      "x": -71,
      "y": -60,
      "tesouraria": 14,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 788
    },
    {
      "nickname": "Daniloqr",
      "x": -54,
      "y": 10,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 150
    },
    {
      "nickname": "Caça Rato",
      "x": -66,
      "y": 39,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 0
    },
    {
      "nickname": "Mestre Guerra",
      "x": -40,
      "y": 23,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 100
    },
    {
      "nickname": "Miguel3532",
      "x": -17,
      "y": -47,
      "tesouraria": 1,
      "tesouraria_x": -17,
      "tesouraria_y": -47,
      "Catapultas": 150
    },
    {
      "nickname": "Dest9",
      "x": -24,
      "y": 135,
      "tesouraria": 25,
      "tesouraria_x": -24,
      "tesouraria_y": 135,
      "Catapultas": 700
    },
    {
      "nickname": "Dest9",
      "x": -24,
      "y": 135,
      "tesouraria": 20,
      "tesouraria_x": -26,
      "tesouraria_y": 135,
      "Catapultas": 700
    },
    {
      "nickname": "Dest9",
      "x": -24,
      "y": 135,
      "tesouraria": 10,
      "tesouraria_x": -28,
      "tesouraria_y": 134,
      "Catapultas": 700
    },
    {
      "nickname": "Caçador",
      "x": -31,
      "y": -29,
      "tesouraria": 10,
      "tesouraria_x": -31,
      "tesouraria_y": -29,
      "Catapultas": 100
    },
    {
      "nickname": "athos",
      "x": -63,
      "y": 60,
      "tesouraria": 10,
      "tesouraria_x": -63,
      "tesouraria_y": 60,
      "Catapultas": 150
    },
    {
      "nickname": "dj_animal",
      "x": -135,
      "y": 6,
      "tesouraria": 8,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 4
    },
    {
      "nickname": "Scalabis",
      "x": 22,
      "y": 81,
      "tesouraria": 0,
      "tesouraria_x": 22,
      "tesouraria_y": 81,
      "Catapultas": 80
    },
    {
      "nickname": "Samuraix",
      "x": -35,
      "y": 26,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 160
    },
    {
      "nickname": "Berlin",
      "x": -11,
      "y": 32,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 120
    },
    {
      "nickname": "Spartakos",
      "x": -4,
      "y": 36,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 55
    },
    {
      "nickname": "Gualdim",
      "x": -53,
      "y": 70,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 5
    },
    {
      "nickname": "A&P",
      "x": -14,
      "y": 31,
      "tesouraria": 8,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 280
    },
    {
      "nickname": "A&P",
      "x": -44,
      "y": 81,
      "tesouraria": 6,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 0
    },
    {
      "nickname": "bnymnalagoz",
      "x": -105,
      "y": 21,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 110
    },
    {
      "nickname": "Picachu",
      "x": -3,
      "y": 54,
      "tesouraria": 8,
      "tesouraria_x": -8,
      "tesouraria_y": 52,
      "Catapultas": 229
    },
    {
      "nickname": "Piudias",
      "x": -12,
      "y": 102,
      "tesouraria": 7,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 100
    },
    {
      "nickname": "Andrebelo",
      "x": -26,
      "y": 86,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 300
    },
    {
      "nickname": "Kaumau",
      "x": 2,
      "y": "",
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 300
    },
    {
      "nickname": "tmsl7657",
      "x": -18,
      "y": 90,
      "tesouraria": 10,
      "tesouraria_x": -18,
      "tesouraria_y": 90,
      "Catapultas": 100
    },
    {
      "nickname": "Sheikim",
      "x": -111,
      "y": -7,
      "tesouraria": 10,
      "tesouraria_x": -111,
      "tesouraria_y": -7,
      "Catapultas": 360
    },
    {
      "nickname": "Sheikim",
      "x": -111,
      "y": -7,
      "tesouraria": 10,
      "tesouraria_x": -114,
      "tesouraria_y": -5,
      "Catapultas": 360
    },
    {
      "nickname": "Sheikim",
      "x": -111,
      "y": -7,
      "tesouraria": 10,
      "tesouraria_x": -113,
      "tesouraria_y": -6,
      "Catapultas": 360
    },
    {
      "nickname": "Greatmadwarrior",
      "x": -54,
      "y": 32,
      "tesouraria": 20,
      "tesouraria_x": -54,
      "tesouraria_y": 32,
      "Catapultas": 2500
    },
    {
      "nickname": "Greatmadwarrior",
      "x": -53,
      "y": 31,
      "tesouraria": 10,
      "tesouraria_x": -53,
      "tesouraria_y": 31,
      "Catapultas": 2500
    },
    {
      "nickname": "kadilak",
      "x": -102,
      "y": 71,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 20
    },
    {
      "nickname": "Sadge",
      "x": -26,
      "y": -4,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 125
    },
    {
      "nickname": "Foxerilo",
      "x": -65,
      "y": 25,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 100
    },
    {
      "nickname": "Shanpioon",
      "x": -69,
      "y": -96,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 0
    },
    {
      "nickname": "Raum",
      "x": -86,
      "y": 30,
      "tesouraria": 10,
      "tesouraria_x": -86,
      "tesouraria_y": 30,
      "Catapultas": 150
    },
    {
      "nickname": "binho games",
      "x": -26,
      "y": 39,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 49
    },
    {
      "nickname": "Dukedepaus",
      "x": -62,
      "y": 142,
      "tesouraria": 10,
      "tesouraria_x": -62,
      "tesouraria_y": 142,
      "Catapultas": 350
    },
    {
      "nickname": "Ferro",
      "x": -16,
      "y": -4,
      "tesouraria": 0,
      "tesouraria_x": -16,
      "tesouraria_y": -4,
      "Catapultas": 180
    },
    {
      "nickname": "cennsurado",
      "x": -56,
      "y": 13,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 100
    },
    {
      "nickname": "Smokemachine OBS: refazendo army",
      "x": -62,
      "y": -47,
      "tesouraria": 10,
      "tesouraria_x": -43,
      "tesouraria_y": -66,
      "Catapultas": 106
    },
    {
      "nickname": "porthus",
      "x": -64,
      "y": 61,
      "tesouraria": 12,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 350
    },
    {
      "nickname": "el matador",
      "x": -36,
      "y": -20,
      "tesouraria": 3,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 155
    },
    {
      "nickname": "Sulivan Ramos",
      "x": -181,
      "y": 183,
      "tesouraria": "",
      "tesouraria_x": -181,
      "tesouraria_y": 184,
      "Catapultas": 830
    },
    {
      "nickname": "Sulivan Ramos",
      "x": -181,
      "y": 183,
      "tesouraria": "",
      "tesouraria_x": -181,
      "tesouraria_y": 183,
      "Catapultas": 830
    },
    {
      "nickname": "Dr Gilvago",
      "x": -58,
      "y": 18,
      "tesouraria": "",
      "tesouraria_x": -52,
      "tesouraria_y": 27,
      "Catapultas": 45
    },
    {
      "nickname": "NoobLeader",
      "x": -52,
      "y": 22,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 0
    },
    {
      "nickname": "Banner",
      "x": -27,
      "y": 44,
      "tesouraria": 1,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 3
    },
    {
      "nickname": "mistic",
      "x": -25,
      "y": 45,
      "tesouraria": 10,
      "tesouraria_x": -25,
      "tesouraria_y": 45,
      "Catapultas": 375
    },
    {
      "nickname": "meola",
      "x": -2,
      "y": 87,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 50
    },
    {
      "nickname": "Os Manos",
      "x": -46,
      "y": -127,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 650
    },
    {
      "nickname": "-clone-",
      "x": -181,
      "y": 45,
      "tesouraria": 10,
      "tesouraria_x": -181,
      "tesouraria_y": 45,
      "Catapultas": 1461
    },
    {
      "nickname": "-clone-",
      "x": -181,
      "y": 45,
      "tesouraria": 12,
      "tesouraria_x": -181,
      "tesouraria_y": 44,
      "Catapultas": 1461
    },
    {
      "nickname": "therain",
      "x": -40,
      "y": -61,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 100
    },
    {
      "nickname": "ROLHAS",
      "x": -123,
      "y": 176,
      "tesouraria": 20,
      "tesouraria_x": -123,
      "tesouraria_y": 176,
      "Catapultas": 885
    },
    {
      "nickname": "TR!PA SECA",
      "x": -55,
      "y": 148,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 370
    },
    {
      "nickname": "Jehungir Agha",
      "x": -28,
      "y": -48,
      "tesouraria": 0,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 20
    },
    {
      "nickname": "Mir",
      "x": -26,
      "y": 164,
      "tesouraria": 10,
      "tesouraria_x": "",
      "tesouraria_y": "",
      "Catapultas": 840
    },
    {
      "nickname": "Pyotrek",
      "x": -36,
      "y": 161,
      "tesouraria": "",
      "tesouraria_x": -36,
      "tesouraria_y": 161,
      "Catapultas": 600
    }
  ];





















  const aldeiasDefensoras = [
    {
      "id": 1,
      "nickname": "2malucos",
      "aldeia": "Test 1",
      "x": -185,
      "y": 118,
      "capital": 1,
      "army": 1402,
      "tribo": 2
    },
    {
      "id": 2,
      "nickname": "AnthRaxxPT80",
      "aldeia": "Test 2",
      "x": -33,
      "y": 17,
      "capital": 1,
      "army": 1626,
      "tribo": 2
    },
    {
      "id": 3,
      "nickname": "Aramis",
      "aldeia": "Test 3",
      "x": 63,
      "y": 59,
      "capital": 1,
      "army": 1597,
      "tribo": 0
    },
    {
      "id": 4,
      "nickname": "Azamat Bagatov",
      "aldeia": "Test 4",
      "x": -10,
      "y": -3,
      "capital": 1,
      "army": 2609,
      "tribo": 2
    },
    {
      "id": 5,
      "nickname": "Avril",
      "aldeia": "Test 5",
      "x": -40,
      "y": -1,
      "capital": 1,
      "army": 1691,
      "tribo": 1
    },
    {
      "id": 6,
      "nickname": "beng",
      "aldeia": "Test 6",
      "x": -34,
      "y": 32,
      "capital": 1,
      "army": 2004,
      "tribo": 2
    },
    {
      "id": 7,
      "nickname": "Berserker",
      "aldeia": "Test 7",
      "x": -139,
      "y": 27,
      "capital": 1,
      "army": 1061,
      "tribo": 0
    },
    {
      "id": 8,
      "nickname": "bima",
      "aldeia": "Test 8",
      "x": -26,
      "y": 140,
      "capital": 1,
      "army": 2243,
      "tribo": 2
    },
    {
      "id": 9,
      "nickname": "bima",
      "aldeia": "Test 9",
      "x": -26,
      "y": 140,
      "capital": 1,
      "army": 982,
      "tribo": 2
    },
    {
      "id": 10,
      "nickname": "Colapse",
      "aldeia": "Test 10",
      "x": -74,
      "y": 42,
      "capital": 1,
      "army": 2553,
      "tribo": 1
    },
    {
      "id": 11,
      "nickname": "CTGA35",
      "aldeia": "Test 11",
      "x": -4,
      "y": -38,
      "capital": 1,
      "army": 2735,
      "tribo": 2
    },
    {
      "id": 12,
      "nickname": "CTGA37",
      "aldeia": "Test 12",
      "x": -38,
      "y": -5,
      "capital": 1,
      "army": 421,
      "tribo": 2
    },
    {
      "id": 13,
      "nickname": "darkbest",
      "aldeia": "Test 13",
      "x": -40,
      "y": 18,
      "capital": 1,
      "army": 681,
      "tribo": 2
    },
    {
      "id": 14,
      "nickname": "Cebola",
      "aldeia": "Test 14",
      "x": -129,
      "y": 130,
      "capital": 1,
      "army": 1227,
      "tribo": 2
    },
    {
      "id": 15,
      "nickname": "Gabiru",
      "aldeia": "Test 15",
      "x": -38,
      "y": 48,
      "capital": 1,
      "army": 2606,
      "tribo": 2
    },
    {
      "id": 16,
      "nickname": "Gonotol",
      "aldeia": "Test 16",
      "x": -53,
      "y": 37,
      "capital": 1,
      "army": 2547,
      "tribo": 0
    },
    {
      "id": 17,
      "nickname": "Han Solo",
      "aldeia": "Test 17",
      "x": -135,
      "y": 63,
      "capital": 1,
      "army": 2241,
      "tribo": 0
    },
    {
      "id": 18,
      "nickname": "Helder",
      "aldeia": "Test 18",
      "x": -140,
      "y": 12,
      "capital": 1,
      "army": 236,
      "tribo": 2
    },
    {
      "id": 19,
      "nickname": "Jock4",
      "aldeia": "Test 19",
      "x": -109,
      "y": 25,
      "capital": 1,
      "army": 2842,
      "tribo": 0
    },
    {
      "id": 20,
      "nickname": "Ganjafarmer23",
      "aldeia": "Test 20",
      "x": -37,
      "y": 43,
      "capital": 1,
      "army": 441,
      "tribo": 2
    },
    {
      "id": 21,
      "nickname": "hrocha86",
      "aldeia": "Test 21",
      "x": -127,
      "y": 16,
      "capital": 1,
      "army": 2545,
      "tribo": 2
    },
    {
      "id": 22,
      "nickname": "HideOnFlango",
      "aldeia": "Test 22",
      "x": -95,
      "y": 178,
      "capital": 1,
      "army": 34,
      "tribo": 0
    },
    {
      "id": 23,
      "nickname": "IZlatanI",
      "aldeia": "Test 23",
      "x": -10,
      "y": 31,
      "capital": 1,
      "army": 1802,
      "tribo": 2
    },
    {
      "id": 24,
      "nickname": "Konos",
      "aldeia": "Test 24",
      "x": 3,
      "y": 41,
      "capital": 1,
      "army": 2280,
      "tribo": 0
    },
    {
      "id": 25,
      "nickname": "hrocha86",
      "aldeia": "Test 25",
      "x": -127,
      "y": 16,
      "capital": 1,
      "army": 853,
      "tribo": 1
    },
    {
      "id": 26,
      "nickname": "JaleInRabey",
      "aldeia": "Test 26",
      "x": -171,
      "y": 7,
      "capital": 1,
      "army": 2483,
      "tribo": 0
    },
    {
      "id": 27,
      "nickname": "JotaPK",
      "aldeia": "Test 27",
      "x": -9,
      "y": 8,
      "capital": 1,
      "army": 2222,
      "tribo": 1
    },
    {
      "id": 28,
      "nickname": "kursk",
      "aldeia": "Test 28",
      "x": -40,
      "y": 68,
      "capital": 1,
      "army": 2544,
      "tribo": 2
    },
    {
      "id": 29,
      "nickname": "Lecas",
      "aldeia": "Test 29",
      "x": -155,
      "y": 35,
      "capital": 1,
      "army": 695,
      "tribo": 2
    },
    {
      "id": 30,
      "nickname": "leonarski1",
      "aldeia": "Test 30",
      "x": -4,
      "y": 49,
      "capital": 1,
      "army": 1079,
      "tribo": 1
    },
    {
      "id": 31,
      "nickname": "Jppinhal",
      "aldeia": "Test 31",
      "x": -98,
      "y": -5,
      "capital": 1,
      "army": 1926,
      "tribo": 0
    },
    {
      "id": 32,
      "nickname": "kadilak",
      "aldeia": "Test 32",
      "x": -49,
      "y": 14,
      "capital": 1,
      "army": 1745,
      "tribo": 0
    },
    {
      "id": 33,
      "nickname": "Kamender",
      "aldeia": "Test 33",
      "x": -153,
      "y": 64,
      "capital": 1,
      "army": 528,
      "tribo": 2
    },
    {
      "id": 34,
      "nickname": "MamicaDeCadela",
      "aldeia": "Test 34",
      "x": -110,
      "y": 14,
      "capital": 1,
      "army": 490,
      "tribo": 1
    },
    {
      "id": 35,
      "nickname": "MELRO",
      "aldeia": "Test 35",
      "x": -52,
      "y": 15,
      "capital": 1,
      "army": 335,
      "tribo": 0
    },
    {
      "id": 36,
      "nickname": "montes13",
      "aldeia": "Test 36",
      "x": -118,
      "y": 154,
      "capital": 1,
      "army": 1575,
      "tribo": 0
    },
    {
      "id": 37,
      "nickname": "Negão",
      "aldeia": "Test 37",
      "x": -22,
      "y": 70,
      "capital": 1,
      "army": 2304,
      "tribo": 2
    },
    {
      "id": 38,
      "nickname": "rdj",
      "aldeia": "Test 38",
      "x": -20,
      "y": 2,
      "capital": 1,
      "army": 2642,
      "tribo": 2
    },
    {
      "id": 39,
      "nickname": "Paivinha",
      "aldeia": "Test 39",
      "x": -155,
      "y": 25,
      "capital": 1,
      "army": 2464,
      "tribo": 0
    },
    {
      "id": 40,
      "nickname": "Poolter",
      "aldeia": "Test 40",
      "x": -11,
      "y": 68,
      "capital": 1,
      "army": 1963,
      "tribo": 2
    },
    {
      "id": 41,
      "nickname": "Marrakesh",
      "aldeia": "Test 41",
      "x": -40,
      "y": 6,
      "capital": 1,
      "army": 1217,
      "tribo": 1
    },
    {
      "id": 42,
      "nickname": "Poumas",
      "aldeia": "Test 42",
      "x": -39,
      "y": 49,
      "capital": 1,
      "army": 186,
      "tribo": 1
    },
    {
      "id": 43,
      "nickname": "PretoAxx",
      "aldeia": "Test 43",
      "x": -1,
      "y": 149,
      "capital": 1,
      "army": 757,
      "tribo": 1
    },
    {
      "id": 44,
      "nickname": "Mercenario",
      "aldeia": "Test 44",
      "x": -101,
      "y": 102,
      "capital": 1,
      "army": 1566,
      "tribo": 1
    },
    {
      "id": 45,
      "nickname": "PapaAldeias",
      "aldeia": "Test 45",
      "x": -43,
      "y": 63,
      "capital": 1,
      "army": 1883,
      "tribo": 0
    },
    {
      "id": 46,
      "nickname": "rjeronymo",
      "aldeia": "Test 46",
      "x": -22,
      "y": 49,
      "capital": 1,
      "army": 276,
      "tribo": 2
    },
    {
      "id": 47,
      "nickname": "Reithor",
      "aldeia": "Test 47",
      "x": -146,
      "y": 5,
      "capital": 1,
      "army": 117,
      "tribo": 1
    },
    {
      "id": 48,
      "nickname": "Ridley64",
      "aldeia": "Test 48",
      "x": -8,
      "y": 35,
      "capital": 1,
      "army": 2277,
      "tribo": 0
    },
    {
      "id": 49,
      "nickname": "Rottenfliger",
      "aldeia": "Test 49",
      "x": -27,
      "y": 47,
      "capital": 1,
      "army": 74,
      "tribo": 2
    },
    {
      "id": 50,
      "nickname": "Spoty",
      "aldeia": "Test 50",
      "x": -60,
      "y": 44,
      "capital": 1,
      "army": 1453,
      "tribo": 1
    },
    {
      "id": 51,
      "nickname": "stivens",
      "aldeia": "Test 51",
      "x": -38,
      "y": 30,
      "capital": 1,
      "army": 1943,
      "tribo": 2
    },
    {
      "id": 52,
      "nickname": "ThiagoSCF",
      "aldeia": "Test 52",
      "x": -64,
      "y": 129,
      "capital": 1,
      "army": 2538,
      "tribo": 1
    },
    {
      "id": 53,
      "nickname": "tonimx",
      "aldeia": "Test 53",
      "x": -122,
      "y": 79,
      "capital": 1,
      "army": 742,
      "tribo": 1
    },
    {
      "id": 54,
      "nickname": "Tucho",
      "aldeia": "Test 54",
      "x": -62,
      "y": 7,
      "capital": 1,
      "army": 2685,
      "tribo": 1
    },
    {
      "id": 55,
      "nickname": "STONED",
      "aldeia": "Test 55",
      "x": -74,
      "y": 74,
      "capital": 1,
      "army": 609,
      "tribo": 1
    },
    {
      "id": 56,
      "nickname": "Triple_f",
      "aldeia": "Test 56",
      "x": -136,
      "y": 56,
      "capital": 1,
      "army": 2509,
      "tribo": 0
    },
    {
      "id": 57,
      "nickname": "Stormblast56",
      "aldeia": "Test 57",
      "x": -58,
      "y": 55,
      "capital": 1,
      "army": 2647,
      "tribo": 2
    },
    {
      "id": 58,
      "nickname": "tiagokcgs",
      "aldeia": "Test 58",
      "x": -62,
      "y": 56,
      "capital": 1,
      "army": 2629,
      "tribo": 2
    },
    {
      "id": 59,
      "nickname": "Vitor.panetto",
      "aldeia": "Test 59",
      "x": -131,
      "y": 21,
      "capital": 1,
      "army": 2968,
      "tribo": 1
    },
    {
      "id": 60,
      "nickname": "Timotoesanti",
      "aldeia": "Test 60",
      "x": -17,
      "y": 69,
      "capital": 1,
      "army": 1517,
      "tribo": 0
    },
    {
      "id": 61,
      "nickname": "Yusuke",
      "aldeia": "Test 61",
      "x": -46,
      "y": 34,
      "capital": 1,
      "army": 1225,
      "tribo": 1
    }
  ];