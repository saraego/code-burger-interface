import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"



const CartContext = createContext({})


export const CardProvider = ({ children }) => { //Resposabilidade do UserProvidade é manter as informações

    const [cardProducts, setCardProducts] = useState([])

    const putProducts = async (products) => {
        const cartIndex = cardProducts.findIndex(pro => pro.id === products.id)
        let newCartProducts = []
        if (cartIndex >= 0) {
            newCartProducts = cardProducts

            newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

            setCardProducts(newCartProducts)
        } else {
            products.quantity = 1
            newCartProducts = [...cardProducts, products]
            setCardProducts(newCartProducts)
        }
        await localStorage.setItem('codeburgue:cartInfo', JSON.stringify(newCartProducts))

    }

    const deleteProducts = async productId => {
        const newCart = cardProducts.filter(product => product.id !== productId)
        setCardProducts(newCart)
        await localStorage.setItem('codeburgue:cartInfo', JSON.stringify(newCart))
    }

    const increseProducts = async productId => {
        const newCart = cardProducts.map(product => {
            return product.id === productId ? {...product, quantity:product.quantity + 1}
            : product
        })

        setCardProducts(newCart)

        await localStorage.setItem('codeburgue:cartInfo', JSON.stringify(newCart))
    }

    useEffect(() => {
        const loadUserData = async () => {
            const clienteCartData = await localStorage.getItem('codeburgue:cartInfo')

            if (clienteCartData) {
                setCardProducts(JSON.parse(clienteCartData))
            }
        }
        loadUserData()
    }, [])

    const decreseProducts = async productId => {

        const cartIndex = cardProducts.findIndex(pd => pd.id === productId)
        if(cardProducts[cartIndex].quantity > 1){
            const newCart = cardProducts.map(product => {
                return product.id === productId ? {...product, quantity:product.quantity - 1}
                : product
            })
            setCardProducts(newCart)
            await localStorage.setItem('codeburgue:cartInfo', JSON.stringify(newCart))
        }else {
            deleteProducts(productId)
           
        }
     
    }



    return (
        <CartContext.Provider value={{ putProducts, cardProducts ,increseProducts,decreseProducts}}>
            {children}
        </CartContext.Provider>
    )
}


//useContext que ira disponibiliza os dados para toda aplicação !
export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart must be used with CartContext")
    }

    return context
}

CardProvider.propTypes = {
    children: PropTypes.node
}



