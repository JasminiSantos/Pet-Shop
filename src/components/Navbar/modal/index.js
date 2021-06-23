import React, { Component } from 'react';


import {BuyBtn, ModalBg,
        ModalBtnClose,
        ModalContainer,
        ModalH1,
        ModalImg,
        ModalP


} from './modalElements'

export default class Modal extends Component {

render() {

    return (
             <ModalBg >
                <ModalContainer>
                    <ModalH1>{this.props.title}</ModalH1>
                    <ModalImg src={this.props.image}/>
                    <ModalP>{this.props.preco}</ModalP>
                    <BuyBtn>Buy</BuyBtn>
                    <ModalBtnClose onClick={this.props.hide}>Close</ModalBtnClose>
                </ModalContainer>
            </ModalBg> 
    )

 }
}