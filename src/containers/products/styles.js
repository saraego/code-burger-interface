import styled from "styled-components"
import ProductLogo from "../../assets/capacategorias.svg"
export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 101vh;
`

export const HomeImg = styled.div`
    width: 100%;
    height: 800px;
    background: url("${ProductLogo}");
    background-size: cover;

`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${props => props.isActiveCategory ? "1px solid #9758A6" : ""} ;
    color: ${props => props.isActiveCategory ? "#9758A6" : "#9a9a9d"} ;
    font-weight: ${props => props.isActiveCategory ? "500" : "300"} ;
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    padding: 40px;
    justify-items: center;
    margin-top: 20px;
`

