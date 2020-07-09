import React from "react"
import { Card, CardHeader, CardImg, CardBody } from "reactstrap"
import { Butao, Butao2 } from "./Button"

export const Cartao = ({ nome, data, banda, musicas, imagem }) => {
	return (
		<Card style={{ width: "auto", height: "auto" }} color='secondary'>
			<CardHeader>{nome}</CardHeader>
			<CardImg
				src={imagem}
				style={{
					width: "18em",
					height: "18em",
				}}
			/>
			<CardBody>
				<p>{banda}</p>
				<p>{musicas}</p>
				<p>{data}</p>
				<Butao />
				<Butao2 />
			</CardBody>
		</Card>
	)
}
