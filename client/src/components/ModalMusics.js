import React, {useState} from 'react'
import { Col, Row, Form, Input, Button, Label, InputGroup, Modal, ModalBody, ModalHeader, } from 'reactstrap';
import {useDispatch} from 'react-redux'
import {postAlbum} from '../actions/albumActions'
export const ModalMusics = () => {
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
      musicas: ["musica","musica2","DNCE"]
    })
    
    const dispatch = useDispatch()
  
  
    const handleChange = (m) => setInfo({ ...musicaInfo, [m.target.name]: m.target.value })
   
  
  
    return (
      <div>
  
        <Form>
          <Label for="nome">Qual álbum deseja adicionar?</Label>
          <Input type="text" name="nome" value={musicaInfo.nome} onChange={(m) => handleChange(m)} />
          <Label for="date">Data do álbum?</Label>
          <Input type="text" name="data" value={musicaInfo.data} onChange={(m) => handleChange(m)} />
          <Label for="banda">Qual é a banda?</Label>
          <Input type="text" name="banda" value={musicaInfo.banda} onChange={(m) => handleChange(m)} />
          {/* <Label for="musicas">Quais músicas deseja adicionar?</Label>
          <Input type="text" name="musicas" value={musicaInfo.musicas} onChange={(m) => handleChange(m)} />
   */}
          <Button color="success" onClick={() =>  dispatch(postAlbum(musicaInfo))}>Enviar</Button>
  
        </Form>
  
      </div>
  
  
    )
  
  }

