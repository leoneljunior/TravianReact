import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>PB War Portal</h1>
     
     

      <div id="header">
        <img id="logo" src="core/src/logo.png"><br/>
        PB War Portal
  </div>

  <div id="body">
  
      <div id="filters">
        Adicione as coordenadas da aldeia que deseja atacar ou defender<br/>
        X:    <input type="text" ng-model="location.x" ng-init="location.x='-43'" class="imput_small" />
        Y:    <input type="text" ng-model="location.y" ng-init="location.y='63'" class="imput_small" /><br/><br />
        Selecione tropa:<br />
        <select ng-model="tropaSelected" ng-options="tropa.name for tropa in TROPAS"></select><br/><br />
        <input type="submit" ng-click="calculate()" value="Calcular" class="button button1" />
    </div>
      
      <hr/>
      
      <div id="result">
      <!-- Order by -->
      Order by: <select ng-model="orderBySelected" ng-options="option.option for option in orderByOptions"></select>
      Filter: <select ng-model="triboSelected" ng-options="tribo.name for tribo in TRIBOS" value="{{tribo.id}}"></select>
      <input type="submit" ng-click="clear()" value="Limpar" />
      <br/><br/>
      <label>Busca: <input data-ng-model="search"></label>
      <table>
        <th>Jogador</th>
        <th>Aldeia</th>
        <th>X</th>
        <th>Y</th>
        <th>Tribo</th>
        <th>Tropas</th>
        <th>Distancia</th>
        <th>Tempo</th>
        <tr ng-repeat="result in results | orderBy: orderBySelected.option:orderBySelected.orderReverse | filter: { nickname: search, tribo:triboSelected.id}">
          <td>{{ result.nickname }}</td> 
          <td>{{ result.aldeia  }}</td>
          <td>{{ result.x  }}</td>
          <td>{{ result.y  }}</td>  
          <td>{{ TRIBOS[result.tribo].name }}</td> 
          <td>{{ result.army }}</td> 
          <td>{{ result.distance  | number: 1}}</td>
          <td>{{ result.time | myDateFilter}}</td>
        </tr>
      </table>
    </div>
  </div>  



     
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
