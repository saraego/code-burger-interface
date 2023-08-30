import React,{useEffect, useState} from "react";
import {Container,CategoryImg,ContainerItens,Image,Button} from "./styles"
import Category from "../../assets/categoria2.png"
import api from "../../services/api"
import Carousel from "react-elastic-carousel"

export function CategoryCarousel(){
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
        async function loadCategory(){
            const {data} = await api.get('categories')
            setCategories(data)
            
        }

        loadCategory()
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
            <CategoryImg src={Category} alt="Logo"/>

            <Carousel itemsToShow={4} style={{width :'90%'}} breakPoints={breakPoints}>
                {
                   categories && categories.map(category => (
                        <ContainerItens key={category.id}>
                            <Image src={category.url} alt="foto da categoria"/>
                            <Button to={'/produtos'} state={category.id}>{category.name}</Button>
                        </ContainerItens>
                   ))
                }
            </Carousel>
        </Container>
    )
}

