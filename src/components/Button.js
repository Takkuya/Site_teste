import React, { useState } from 'react'
import { Button, Badge, Modal, ModalBody, ModalHeader } from 'reactstrap'

export const Butao = () => {
    const [BotaoSalvar, setBotao] = useState(false)

    return (<div>
        <Button className = "mb-2"
            onClick={() => setBotao(!BotaoSalvar)}
            block
            color={
                BotaoSalvar ? "danger" : "success"
            }

        >{BotaoSalvar ? "Remover música" : "Salvar música"}
        </Button>





    </div>
    )
}

export const Butao2 = () => {
    const [BotaoMusicas, setMusicas] = useState(false)

    const openModal = () => [
        setMusicas(!BotaoMusicas)
    ]

    return (<div>
        <Button
            onClick={openModal}
            color="success"
            block
            href="#"
        >Mais informações</Button>

        <Modal
        toggle = {openModal}
        isOpen = {BotaoMusicas}
        >
            <ModalHeader>Informações das músicas:</ModalHeader>
            <ModalBody>
            Aliquip cillum dolore quis non anim. Culpa qui sunt deserunt laboris dolor ex qui minim duis mollit duis nostrud amet. Consequat adipisicing labore in quis amet nulla adipisicing sunt est incididunt magna duis culpa. Ut quis nisi incididunt nisi tempor eiusmod sit occaecat elit commodo minim magna. Commodo voluptate mollit minim Lorem adipisicing dolor aliquip magna nulla irure Lorem laboris sit exercitation. Officia irure sunt sint ex quis commodo. Aute eu dolor anim consectetur non consequat fugiat amet exercitation non magna.
                
            </ModalBody>

        </Modal>

    </div>)
}
