import React from 'react';
// import { Col, Row } from 'reactstrap';
import yorushika from './components/assets/Yorushika_Logo.jpg'
import {Header, Cartao} from './components/NavBar.js'
import { Col, Row } from 'reactstrap';
import Butao from './components/Button'

function App() {

  const album = [
    {nome: "Album", data: "2020", banda: "Zeca Pagodinho", musicas: "39", imagem: yorushika },
    {nome: "", data: "", banda: "", musicas: "", imagem: yorushika },
    {nome: "", data: "", banda: "", musicas: "" ,imagem: yorushika},
    {nome: "", data: "", banda: "", musicas: "" ,imagem: yorushika},
    {nome: "", data: "", banda: "", musicas: "", imagem: yorushika},
    {nome: "", data: "", banda: "", musicas: "", imagem: yorushika},
    {nome: "", data: "", banda: "", musicas: "", imagem: yorushika},
    {nome: "", data: "", banda: "", musicas: "", imagem: yorushika},
    {nome: "", data: "", banda: "", musicas: "", imagem: yorushika},
  ]

  return (
    <div className="App">
      <Header/>
      <Row style = {{width: "100%"}} > {/*divide em 12 espaços iguais, na direção (neste caso Row = linha)*/}
        {
          album.map(album => (
            <Col style ={{margin: "2em 3em"}} xs="3"> {/* "xs" define que na tela extra small (e todas acima, caso não sejam especificadas) cada componente dentro da linha vai tomar 4/12 espaço = 1/3 */}
              <Cartao {...album} style={{width:"100%"}}></Cartao>
              
            </Col>
            
            ))
        }

      </Row>
))


      
     

    </div>
  );
}

export default App;
