import React, { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, Button } from "reactstrap"
import Texto from "./Texto"
const ModalMusica = ({ nome, data, banda, musicas, imagem }) => {
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

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(!open)
	return (
		<React.Fragment>
			<Button color='success' block onClick={handleOpen} className='mt-2'>
				Mais Informações
			</Button>
			<Modal isOpen={open} toggle={handleOpen} size='lg'>
				<ModalHeader toggle={handleOpen} style={styles.modalHeader}>
					{nome}
				</ModalHeader>
				<ModalBody style={styles.modalBody}>
					<Row>
						<Col xs={12} md={6}>
							<img src={imagem} alt={nome} style={styles.cardImgStyle} />
						</Col>
						<Col xs={12} md={6}>
							<Texto content={`Artista: ${banda}`} />
							<Texto content={`Faixas: ${musicas}`} />
							<Texto content={`Ano: ${data}`} />
						</Col>
					</Row>
				</ModalBody>
			</Modal>
		</React.Fragment>
	)
}

export default ModalMusica
