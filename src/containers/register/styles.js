import styled from "styled-components";
import BackgroundCapa from "../../assets/papel-login.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${BackgroundCapa}");

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginImage = styled.img`
  height: 70%;
`;

export const ContainerItens = styled.div`
  padding: 25px 75px;
  height: 70%;
  background: #373737;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    color: #FFF;
    font-size: 24px;
    line-height: normal;
    text-align: center;
    margin-top: 10px;
  }

  form{
    display: flex;
    flex-direction: column;
  }
`;
export const Label = styled.p`
    color: #FFF;
    font-size: 14px;
    font-weight:400;
    line-height: normal;
    margin-top: ${props => props.err ? "5px" : "16px"};
    transition: ${props => props.err ? "" : ".2s ease"};
    margin-bottom: 5px;

`;
export const Input = styled.input`
    border: ${props => props.err ? '1px solid #cc1717': 'none'} ;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
    width: 391.416px;
    height: 38.319px;
    padding-left: 8px;
`;

export const Error = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 4px;
`


export const SignInLink = styled.p`
    color: #FFF;
font-size: 14px;
font-weight: 400;


`;
