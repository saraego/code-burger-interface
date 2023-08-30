import styled from "styled-components"

export const Container = styled.div`
height: 72px;
  background-color: #eee;
  box-shadow: 2px 3px 5px #ccc;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color:${props => props.isActive ? "#9758A6" : "#555"};
  font-weight: ${props => props.isActive ? "700" : ""};
  font-size: 19px;
  line-height: 16px;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 20px;

.line{
  height: 40px;
  border-right: 0.5px solid #ccc;
}
`

export const ContainerText = styled.div`
p{
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  color: #555;
}
`

export const PageLinkExit = styled.a`
font-size: 14px;
font-weight: bold;
line-height: 16px;
color: #9758A6;
cursor: pointer;
`

