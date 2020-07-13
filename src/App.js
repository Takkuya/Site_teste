import React, { useState } from 'react';
// import musicas from './components/assets/placeholder/musicas'
import { Header } from './components/NavBar.js'
import { Cartao } from './components/Cartao'
import { Col, Row, Form, Input, Button, Label, InputGroup, Modal, ModalBody, ModalHeader, } from 'reactstrap';
import TWLTRD from './components/assets/TWLTRD.jpg'
import DOAB from './components/assets/DOAB.jpg'
import PFTW from './components/assets/PFTW.jpg'
import AFYCSO from './components/assets/AFYCSO.jpg'
import SHC from './components/assets/SHC.jpg'
import Torches from './components/assets/Torches.jpg'
import Supermodel from './components/assets/Supermodel.jpg'
import Stories from './components/assets/Stories.jpg'
import TAOY from './components/assets/TAOY.jpg'
import Plagiarism from './components/assets/Plagiarism.jpg'
import Elma from './components/assets/Elma.jpg'
import ActII from './components/assets/ActII.jpg'
import placeholder from './components/assets/download.jpg'


const musicas = [
  { nome: "Sacred Hearts Club", data: "2017", banda: "Foster the People", musicas: " 9", imagem: SHC },
  { nome: "Pray For the Wicked", data: "2018", banda: "Panic! At the Disco", musicas: "11", imagem: PFTW },
  { nome: "Torches", data: "2015", banda: "Foster the People", musicas: "10", imagem: Torches },
  { nome: "Supermodel", data: "2012", banda: "Foster the People", musicas: "10", imagem: Supermodel },
  { nome: "Too Weird to Live; Too Rare To Die!", data: "2013", banda: "Panic! At the Disco", musicas: "8", imagem: TWLTRD },
  { nome: "A Fever You Can't Sweat Out", data: "2009", banda: "Panic! At the Disco", musicas: "12", imagem: AFYCSO },
  { nome: "Death of a Bachelor", data: "2016", banda: "Panic! At the Disco", musicas: "11", imagem: DOAB },
  { nome: "Elma", data: "2019", banda: "Yorushika", musicas: " 13", imagem: Elma },
  { nome: "The Attractions of Youth", data: "2020", banda: "Barns Courtney", musicas: " 39", imagem: TAOY },
  { nome: "Stories", data: " 2020", banda: "Avicii", musicas: "9", imagem: Stories },
  { nome: "Plagiarism", data: " 2020", banda: "Yorushika", musicas: "14", imagem: Plagiarism },
  { nome: "Act II", data: "2020", banda: "The Protomen", musicas: "11", imagem: ActII },
]


function App() {



  return (
    <div style={{
      fontFamily: 'Roboto',
      backgroundColor: "#333333"
    }}>
      <Header />
      <ModalMusics></ModalMusics>


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

const ModalMusics = () => {
  const styles = {
    modalBody: {
      backgroundColor: "#333333",
      color: "white",
    },
    modalHeader: {
      backgroundColor: "#28a745",
      color: "white",
    },
    cardImgStyle: {
      width: "100%",
      height: "100%",
    },
  }

  const [modal, setModal] = useState(false)
  const openModal = () => [setModal(!modal)]


  return (
    <div>
      <Button color="success" block onClick={openModal} className="mt-2">Mais
      </Button>
      <Modal toggle={openModal} isOpen={modal}>
        <ModalHeader toggle={openModal} style={styles.modalHeader}>Adicionar um álbum</ModalHeader>
        <ModalBody style={styles.modalBody}>
          <AddMusicas />
        </ModalBody>
      </Modal>
    </div>
  )

}


export const AddMusicas = () => {

  const [musicaInfo, setInfo] = useState({
    nome: "",
    data: "",
    banda: "",
    musicas: "",
    imagem: placeholder
  })



  const handleChange = (m) => setInfo({ ...musicaInfo, [m.target.name]: m.target.value })
  const submitMusicas = () => {

    musicas.push(musicaInfo)
    console.log(musicas)
  }


  return (
    <div>

      <Form>
        <Label for="nome">Qual álbum deseja adicionar?</Label>
        <Input type="text" name="nome" value={musicaInfo.nome} onChange={(m) => handleChange(m)} />
        <Label for="date">Data do álbum?</Label>
        <Input type="text" name="data" value={musicaInfo.data} onChange={(m) => handleChange(m)} />
        <Label for="banda">Qual é a banda?</Label>
        <Input type="text" name="banda" value={musicaInfo.banda} onChange={(m) => handleChange(m)} />
        <Label for="musicas">Quais músicas deseja adicionar?</Label>
        <Input type="text" name="musicas" value={musicaInfo.musicas} onChange={(m) => handleChange(m)} />

        <Button color="success" onClick={submitMusicas}>Enviar</Button>

      </Form>

    </div>


  )

}




export default App;
