import React from "react";
import {Container,HomeImg} from "./styles"

import {CategoryCarousel,OffersCarousel }from "../../components";


export function Home(){
    return(
        <Container>
            <HomeImg></HomeImg>
            <CategoryCarousel/>
            <OffersCarousel/>
        </Container>
    )
}

