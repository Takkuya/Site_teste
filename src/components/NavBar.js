import React, { useState } from "react"
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	Modal,
	ModalBody,
	ModalHeader,
} from "reactstrap"
import { FormLogin, FormCadastro } from './Forms'
import { AddMusicas } from "../App"
export const Header = () => {
	const [isOpen, toggle] = useState(false)

	return (
		<Navbar color='success' dark expand='md'>
			<NavbarBrand>Site generico de musica</NavbarBrand>
			<NavbarToggler onClick={() => toggle(!isOpen)} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className='ml-2' navbar>
					<NavItem>
						<LoginModal />
					</NavItem>
					<NavItem>
						<CadastroModal />
					</NavItem>
					<NavItem>
						<NavLink href=''>Discografia</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href=''>Artistas</NavLink>
					</NavItem>
				</Nav>

			</Collapse>
		</Navbar>
		
	)
}

const LoginModal = () => {
	const [modal, setModal] = useState(false)

	const openModal = () => [setModal(!modal)]

	return (
		<div>
			<NavLink onClick={openModal} color='success' href='#'>
				Login
			</NavLink>
			<Modal toggle={openModal} isOpen={modal}>
				<ModalHeader toggle={openModal}>Login</ModalHeader>
				<ModalBody>
					<FormLogin />
				</ModalBody>
			</Modal>
		</div>
	)
}

const CadastroModal = () => {
	const [modal, setModal] = useState(false)

	const openModal = () => [setModal(!modal)]

	return (
		<div>
			<NavLink onClick={openModal} color='success' href='#'>
				Cadastro
			</NavLink>
			<Modal toggle={openModal} isOpen={modal}>
				<ModalHeader toggle={openModal}>Cadastro</ModalHeader>
				<ModalBody>
					<FormCadastro />
				</ModalBody>
			</Modal>
		</div>
	)
}
