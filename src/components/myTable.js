import React from 'react'

function calcDistancia(x1, y1, x2, y2){
  var distancia1 =   (x1 - x2)*(x1 - x2);
  var distancia2 =   (y1 - y2)*(y1 - y2);
  var distancia3 =   distancia1 + distancia2;
  var distancia =  Math.sqrt(distancia3 );
  return distancia;
}
function sortLogic(a, b, sortStr) {

  if(sortStr === 'army' || sortStr === 'Catapultas' || sortStr === 'Tesouraria') {
    return a[sortStr] < b[sortStr];
  } else {
    return a[sortStr] > b[sortStr];
  } 
}

export class MyTable extends React.Component {
    render(){
      
      console.log("Test");
      var aldeiasList = {};
      var tableHeader = this.props.tableHeader;
      if(this.props.type === '1'){

        aldeiasList = this.props.data.filter((aldeia, i) => aldeia.nickname.toLowerCase().includes(this.props.filterStr.toLowerCase())).sort((a, b) => (sortLogic(a, b, this.props.sort)) ? 1 : -1).map((aldeia, i) => 
        <tr key={i}>
          <td>{aldeia.nickname}</td>
          <td>{aldeia.x} | {aldeia.y}</td>
          <td>Nível {aldeia.Tesouraria}</td>
          <td>{aldeia.tesouraria_x} | {aldeia.tesouraria_y}</td>
          <td>{aldeia.Catapultas}</td>
          <td>{aldeia.distancia = parseFloat(calcDistancia(Number(aldeia.x), Number(aldeia.y), this.props.x, this.props.y).toFixed(2))}</td>
        </tr>);
      } else {
        aldeiasList = this.props.data.filter((aldeia, i) => aldeia.nickname.toLowerCase().includes(this.props.filterStr.toLowerCase())).sort((a, b) => (sortLogic(a, b, this.props.sort)) ? 1 : -1).map((aldeia, i) => 
        <tr key={i}>
          <td>{aldeia.nickname}</td>
          <td>{aldeia.x} | {aldeia.y}</td>
          <td>{aldeia.army}</td>
          <td>{aldeia.distancia = parseFloat(calcDistancia(Number(aldeia.x), Number(aldeia.y), this.props.x, this.props.y).toFixed(2))}</td>
        </tr>);
      }
      

      return (
        <div id="result">
          <table>
            <thead>
              {tableHeader}
            </thead>
            <tbody>
              {aldeiasList}
            </tbody>
          </table>
        </div>
      );
    }
  
  };

  MyTable.defaultProps = { filterStr : ''};
  