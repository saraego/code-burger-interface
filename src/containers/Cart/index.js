import React from "react";
import {Container,CartImg,Wrapper} from "./styles"
import {CartItems,CartResume} from "../../components"
import Logo from "../../assets/capacategorias.svg"


export function Cart(){
    return(
        <Container>
            <CartImg src={Logo} alt="Logo"/>
            <Wrapper>
                <CartItems/>
                <CartResume/>
            </Wrapper>
        </Container>
    )
}

