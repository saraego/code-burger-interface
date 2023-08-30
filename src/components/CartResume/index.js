import React,{useState,useEffect} from "react";
import { Container } from "./styles"
import { Button } from "../Button"
import fomatedCurrency from "../../utils/formatCurrency"
import {useCart} from "../../hooks/CartContext"
import api from "../../services/api"
import { toast } from "react-toastify";




export function CartResume() {

    const [finalPrice,setFinalPrice] = useState(0)
    const [delivery] = useState(0)

    const {cardProducts} = useCart()

    useEffect(()=>{
        const sumAllItems = cardProducts.reduce((acc,current) => {
            return current.price * current.quantity + acc
        },0)

        setFinalPrice(sumAllItems)
    },[cardProducts,delivery])


    const submitOrder = async () => {
        const order = cardProducts.map( product => {
            return { id:product.id, quantity: product.quantity}
        })
        await toast.promise(api.post('orders',{products:order}),{
            pending:'Realizando pedido',
            success:"Pedido feito",
            error:"Falha no sistema, tente mais tarde"
        })
       
    }


    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="itens">Itens</p>
                    <p className="itens-price">{fomatedCurrency(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de entrega</p>
                    <p className="delivery-tax-price">{fomatedCurrency(delivery)}</p>
                </div>

                <div className="container-bottom">
                    <p>Total</p>
                    <p>{fomatedCurrency(finalPrice + delivery)}</p>
                </div>


            </Container>
            <Button style={{width:'100%', marginTop:20}} onClick={submitOrder}>
                Finalizar Pedido
            </Button>
        </div>

    )
}

