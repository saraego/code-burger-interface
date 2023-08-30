import React from "react";
import { Container, ContainerLeft, ContainerRight ,ContainerText,PageLink,PageLinkExit} from "./styles"
import { useNavigate } from "react-router-dom";

import Cart from "../../assets/cart.svg"
import Person from "../../assets/person.svg"
import { useUser } from "../../hooks/UserContext";

export function Header() {
  const navigate = useNavigate()
    const {logout,userData} = useUser()
    const logoutUser=()=>{
        logout()
        navigate('/login')
    }
    

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={()=> navigate('/')} isActive={window.location.pathname === '/'}>Home</PageLink>
                <PageLink onClick={()=> navigate('/produtos')} isActive={window.location.pathname === '/produtos'}>Ver produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={()=> navigate('/carrinho')} > <img src={Cart} alt="cartIMG" /></PageLink>
                <div className="line"></div>
                <PageLink> <img src={Person} alt="personIMG" /></PageLink>

                <ContainerText>
                    <p>{userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}

