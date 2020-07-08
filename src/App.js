import React from 'react';
import musicas from './components/assets/placeholder/musicas'
import { Header } from './components/NavBar.js'
import { Cartao } from './components/Cartao'
import { Col, Row } from 'reactstrap';


function App() {



  return (
    <div style={{
      fontFamily: 'Roboto',
      backgroundColor: "#333333"
    }}>
      <Header />
      <Row style={{ width: "100%" }} className="p-4" > {/*divide em 12 espaços iguais, na direção (neste caso Row = linha)*/}
        {
          musicas.map(album => (
            <Col xs="12" sm="6" md="4" lg="3" className="mb-4 mt-4" > {/* "xs" define que na tela extra small (e todas acima, caso não sejam especificadas) cada componente dentro da linha vai tomar 4/12 espaço = 1/3 */}
              <Cartao {...album} ></Cartao>

            </Col>

          ))
        }

      </Row>
  ))





    </div >
  );
}

export default App;
