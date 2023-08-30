import React from "react";
import {Container,Image,ProductName,ProductPrice} from "./styles"
import {Button} from "../../components/"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";

import PropTypes from "prop-types"

export function CardProduct({product}){
    const navigate = useNavigate()

    const {putProducts} = useCart()

    return (
        <Container>
            <Image src={product.url} alt="Imagem do produto"/>
           <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formtedPrice}</ProductPrice>
            <Button onClick={()=> {putProducts(product)
                navigate('/carrinho')
            }}>Adcionar</Button>
           </div>
        </Container>
    )
}



CardProduct.propTypes = {
    product: PropTypes.object
}