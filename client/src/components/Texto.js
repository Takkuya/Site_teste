import React from "react"

const Texto = ({ content, color, variant = "p" }) => {
	const textStyles = {
		h1: <h1>{content}</h1>,
		h2: <h2>{content}</h2>,
		h3: <h3>{content}</h3>,
		p: <p>{content}</p>,
	}

	return <div style={{ color: color }}>{textStyles[variant]}</div>
}

export default Texto
