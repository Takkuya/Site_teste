import React, {useState} from 'react'
import { Card, CardHeader, CardImg, CardBody, Navbar, NavbarBrand, NavbarToggler, Collapse ,Nav, NavItem, NavLink} from 'reactstrap'
import Butao from './Button'
export const Header = () =>{
    const[isOpen, toggle] = useState(false)

    return(
        <Navbar
        color = "primary"
        light
        expand = "md"
        >
            <NavbarBrand>Site generico de musica</NavbarBrand>
            <NavbarToggler onClick = {() => toggle(!isOpen)}/>
            <Collapse isOpen = {isOpen} navbar>
                <Nav className = "ml-2" navbar>
                    <NavItem>
                        <NavLink href = "">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "">Cadastro</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "">Discografia</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "">Artistas</NavLink>
                    </NavItem>

                </Nav>


            </Collapse>


        </Navbar>

    )
}

export const Cartao = ({nome, data, banda, musicas, imagem}) =>{
    return(
        <Card style = {{width:"30vw", height:"auto"}}color = "secondary">
            <CardHeader>{nome}</CardHeader>
            <CardImg src = {imagem}/>
            <CardBody><p>{banda}</p>
            <p>{musicas}</p>
            <p>{data}</p>
            <Butao/>
            </CardBody>


        </Card>
    )
}






