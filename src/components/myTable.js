import React from 'react'

function calcDistancia(x1, y1, x2, y2){
  var distancia1 =   (x1 - x2)*(x1 - x2);
  var distancia2 =   (y1 - y2)*(y1 - y2);
  var distancia3 =   distancia1 + distancia2;
  var distancia =  Math.sqrt(distancia3 );
  return distancia;
}
function sortLogic(a, b, sortStr) {

  if(sortStr === 'army') {
    return a[sortStr] < b[sortStr];
  } else {
    return a[sortStr] > b[sortStr];
  } 
}

export class MyTable extends React.Component {
    render(){
      
      console.log("Test");
      const aldeiasList = aldeias.filter((aldeia, i) => aldeia.nickname.toLowerCase().includes(this.props.filterStr.toLowerCase())).sort((a, b) => (sortLogic(a, b, this.props.sort)) ? 1 : -1).map((aldeia, i) => 
        <tr key={i}>
          <td>{aldeia.nickname}</td>
          <td>{aldeia.aldeia}</td>
          <td>{aldeia.x}</td>
          <td>{aldeia.y}</td>
          <td>{aldeia.tribo}</td>
          <td>{aldeia.army}</td>
          <td>{aldeia.distancia = parseFloat(calcDistancia(aldeia.x, aldeia.y, this.props.x, this.props.y).toFixed(2))}</td>
          <td>{aldeia.time}</td>
        </tr>);

      return (
        <div id="result">
          <table>
            <thead>
              <tr>
                <th>Jogador</th>
                <th>Aldeia</th>
                <th>X</th>
                <th>Y</th>
                <th>Tribo</th>
                <th>Tropas</th>
                <th>Distancia</th>
                <th>Tempo</th>         
              </tr>
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
  
  const aldeias = [
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