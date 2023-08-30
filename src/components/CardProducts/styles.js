import styled from "styled-components"

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0px 30px 60px rgba(57,57,57,0.1);
    padding: 10px;
    display: flex;
    gap: 12px;
    width: max-content;
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Image = styled.img`
    width: 150px;
    border-radius: 10px;
`
export const ProductName = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    color: #000;
`
export const ProductPrice = styled.p`
 font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-top: 40px;
    color: #000;
`