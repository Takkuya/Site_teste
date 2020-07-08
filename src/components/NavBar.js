import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
export const Header = () => {
    const [isOpen, toggle] = useState(false)

    return (
        <Navbar

            color="success"
            dark
            expand="md"
        >
            <NavbarBrand>Site generico de musica</NavbarBrand>
            <NavbarToggler onClick={() => toggle(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-2" navbar>
                    <NavItem>
                        <LoginModal />
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Cadastro</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Discografia</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Artistas</NavLink>
                    </NavItem>

                </Nav>


            </Collapse>


        </Navbar>

    )
}

const LoginModal = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => [
        setModal(!modal)
    ]

    return (
        <div>
            <NavLink
                onClick={openModal}
                color="success"
                href="#"
            >Login</NavLink>
            <Modal
                toggle={openModal}
                isOpen={modal}
            >
                <ModalHeader toggle={openModal}>Login</ModalHeader>
                <ModalBody>
                    Aliquip cillum dolore quis non anim. Culpa qui sunt deserunt laboris dolor ex qui minim duis mollit duis nostrud amet. Consequat adipisicing labore in quis amet nulla adipisicing sunt est incididunt magna duis culpa. Ut quis nisi incididunt nisi tempor eiusmod sit occaecat elit commodo minim magna. Commodo voluptate mollit minim Lorem adipisicing dolor aliquip magna nulla irure Lorem laboris sit exercitation. Officia irure sunt sint ex quis commodo. Aute eu dolor anim consectetur non consequat fugiat amet exercitation non magna.
                </ModalBody>

            </Modal>

        </div>


    )
}







