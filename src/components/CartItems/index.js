import React from "react";
import {Body, Container,Header,EmptyCart} from "./styles"

import {useCart} from "../../hooks/CartContext"
import formatedPrice from "../../utils/formatCurrency"

export function CartItems(){
    const {cardProducts,increseProducts,decreseProducts} = useCart()
   
   
   

    return(
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{marginRight: 30}}>Quantidade</p>
                <p>Total</p>
            </Header>
            
            {cardProducts && cardProducts.length > 0 ? (
             cardProducts.map(product => (
                 <Body key={product.id}>
                    <img src={product.url} alt={product.name}/>
                    <p>{product.name}</p>
                    <p>{formatedPrice(product.price)}</p>
                    <div className="quantity-container">
                        <button onClick={()=> decreseProducts(product.id)}>-</button>
                        <p>{product.quantity}</p>
                        <button onClick={()=> increseProducts(product.id)}>+</button>
                    </div>
                    <p>{formatedPrice(product.quantity*product.price)}</p>
                 </Body>
            ))
            ) : (
                <EmptyCart>Carrinho vazio</EmptyCart>
            )
        }
           

        </Container>
    )
}

