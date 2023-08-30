import React, { useState,useEffect } from "react";
import {Container,HomeImg,CategoryButton,CategoriesMenu,ProductsContainer} from "./styles"
import api from "../../services/api"
import { useLocation } from "react-router-dom";
import {CardProduct} from "../../components";
import formtCurrency from "../../utils/formatCurrency"

export function Products(){
    const {state} = useLocation()

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [activeCategory, setActiveCategory]= useState(state)

   
    
    useEffect(()=>{
        if(state?.categoryId){
            setActiveCategory(state.categoryId)
        }
       },[state?.categoryId])
    
    useEffect(()=>{
        async function loadCategory(){
            const {data} = await api.get('categories')

            const newCategorie = [{id:0, name:"Todos"},...data]
            setCategories(newCategorie)
        }

        async function loadProducts(){
            const {data:allProducts} = await api.get('products')

            const newProduct = allProducts.map(product => {
                return {...product, formtedPrice: formtCurrency(product.price)}
            })
            setProducts(newProduct)
        }

        loadProducts()
        loadCategory()
    },[])

    useEffect(()=>{

        if(activeCategory === 0 ){
            setFilterProducts(products)
        }else{
            const newFilteredProduct = products.filter(
                product => product.category_id === activeCategory
            )
    
            setFilterProducts(newFilteredProduct)
        }
       
    },[activeCategory,products])

 
    return(
        <Container>
            <HomeImg></HomeImg>

            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton 
                    type="button" 
                    key={category.id}
                    isActiveCategory={activeCategory === category.id}
                    onClick={()=> {
                        setActiveCategory(category.id)
                        }}>
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
           
           <ProductsContainer>
                {filterProducts && filterProducts.map(produc => (
                    <CardProduct key={produc.id} product={produc}/>
                ))}
           </ProductsContainer>

        </Container>
    )
}

