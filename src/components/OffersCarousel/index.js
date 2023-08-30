import React,{useEffect, useState} from "react";
import {Container,CategoryImg,ContainerItens,Image,Button} from "./styles"

import Offers from "../../assets/ofertas2.png"
import api from "../../services/api"
import Carousel from "react-elastic-carousel"
import formtCurrency from "../../utils/formatCurrency"
import {useCart} from "../../hooks/CartContext"
import { useNavigate } from "react-router-dom";

export function OffersCarousel(){
    const {putProducts} = useCart()
    const navigate = useNavigate()
    const [offers, setOffers] = useState([])
    useEffect(()=>{
        async function loadOffers(){
            const {data} = await api.get('products')

            const onlyOffer = data.filter(product => product.offer).map(product => {
                return {...product, formtCurrency:formtCurrency(product.price)}
            })
            setOffers(onlyOffer)
            
        }

        loadOffers()
    },[])


    const breakPoints = [
        {width:1, itemsToShow:1},
        {width:400, itemsToShow:2},
        {width:600, itemsToShow:3},
        {width:900, itemsToShow:4},
        {width:1300, itemsToShow:5}
    ]

    return(
        <Container>
            <CategoryImg src={Offers} alt="Logo"/>

            <Carousel itemsToShow={4} style={{width :'90%'}} breakPoints={breakPoints}>
                {
                   offers && offers.map(product => (
                        <ContainerItens key={product.id}>
                            <Image src={product.url} alt="foto do produto"/>
                            <p>{product.name}</p>
                            <p>{product.formtCurrency}</p>
                            <Button onClick={()=> {putProducts(product)
                                 navigate('/carrinho')}}>Peça agora</Button>
                        </ContainerItens>
                   ))
                }
            </Carousel>
        </Container>
    )
}

