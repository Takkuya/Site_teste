import React, { useState } from 'react'
import { Form, Input, Button, Label, InputGroup } from 'reactstrap'

const users = []

export const FormLogin = () => {
    const [userInfo, setInfo] = useState({
        email: "",
        senha: ""
    })

    const handleChange = (e) => setInfo({ ...userInfo, [e.target.name]: e.target.value })
    const handleSubmit = () => {
        // alert(`Email : ${userInfo.email} Senha: ${userInfo.senha}`)

        const requestedUser = users.filter(user => user.email === userInfo.email && user.senha === userInfo.senha)

        console.log(requestedUser)

    }
    return (
        <Form>

            <Label for="email">Email</Label>
            <Input type="email" name="email" value={userInfo.email} onChange={(e) => handleChange(e)} />
            <Label for="senha">Senha</Label>
            <Input type="password" name="senha" value={userInfo.senha} onChange={(e) => handleChange(e)} />
            <Button color="success" onClick={handleSubmit}>Enviar</Button>

        </Form>
    )
}

export const FormCadastro = () => {
    const [cadastroInfo, setCadastro] = useState({
        nome: "",
        email: "",
        senha: ""
    })


    //nome : ovalorquetava, email : ovalorquetava , senha : ovalorqueestamosmandando 
    const handleChange = (e) => setCadastro({ ...cadastroInfo, [e.target.name]: e.target.value })
    const handleSubmit = () => {
        // alert(`Nome: ${cadastroInfo.nome} email: ${cadastroInfo.email} senha: "cu"`)
        users.push(cadastroInfo)
        console.log(users)
    }
    return (
        <Form>

            <Label for="nome">Nome</Label>
            <Input type="text" name="nome" value={cadastroInfo.nome} onChange={(e) => handleChange(e)} />
            <Label for="email">Email</Label>
            <Input type="email" name="email" value={cadastroInfo.email} onChange={(e) => handleChange(e)} />
            <Label for="senha">Senha</Label>
            <Input type="password" name="senha" value={cadastroInfo.senha} onChange={(e) => handleChange(e)} />

            <Button color="success" onClick={handleSubmit}>Enviar</Button>
        </Form>
    )
}
