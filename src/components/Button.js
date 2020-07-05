import React, {useState} from 'react'

const Butao = () =>{
    const[BotaoSalvar, setBotao] =useState(false)

    return (<div>
        <button
            onClick={()=> setBotao(!BotaoSalvar)}
            className = "btn-danger"
            
            >{BotaoSalvar ? "Remover música" : "Salvar música"}
        </button>
            
    </div>
    )
}

export default Butao