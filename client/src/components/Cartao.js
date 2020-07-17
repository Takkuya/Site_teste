import React from "react"
import { Card, CardHeader, CardImg, CardBody } from "reactstrap"
import { Butao } from "./Button"
import Modal from "./Modal"
import Texto from "./Texto"

export const Cartao = ({ nome, data, banda, musicas, imagem }) => {
	return (
		<Card style={{ width: "auto", height: "100%" }} color='secondary'>
			<CardHeader>{nome}</CardHeader>
			<CardImg
				src={imagem}
				style={{
					width: "100%",
					height: "auto",
				}}
			/>
			<CardBody>
				<Texto content={banda} variant='p' color='black' />
				<Butao />
				<Modal {...{ nome, data, banda, musicas, imagem }} />
			</CardBody>
		</Card>
	)
}
