import React, { useState } from "react"
import { Button } from "reactstrap"

export const Butao = () => {
	const [BotaoSalvar, setBotao] = useState(false)

	return (
		<div>
			<Button
				className='mb-2'
				onClick={() => setBotao(!BotaoSalvar)}
				block
				color={BotaoSalvar ? "danger" : "success"}>
				{BotaoSalvar ? "Remover música" : "Salvar música"}
			</Button>
		</div>
	)
}
