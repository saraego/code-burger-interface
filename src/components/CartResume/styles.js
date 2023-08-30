import styled from "styled-components"

export const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 10px 10px 40px #CCC;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top{
    display: grid;
    grid-gap: 10px 140px;
    grid-template-areas:
    'title title'
    'itens itens-price'
    'delivery-tax delivery-tax-price '
    ;
  }

  .title{
    grid-area: title;
    margin-bottom: 20px;
  }
   .itens{
    grid-area: itens;
  }
   .itens-price{
    grid-area: itens-price;
  }
   .delivery-tax{
    grid-area: delivery-tax;
    margin-top: 5px;
  }
   .delivery-tax-price{
    grid-area: delivery-tax-price;
     margin-top: 5px;
  }


  .container-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }

`
