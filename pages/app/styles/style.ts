import styled from "styled-components";
export const StarWarsLogo = styled.img`
  max-width: 500px;
`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
flex-direction: column;
`

export const Container2 = styled.div`
display: flex;
margin: 48px;
justify-content: space-between;
align-items: center;

@media(max-width: 768px){
  flex-direction: column;
}
`

export const Button = styled.button`
  margin: 12px;
  width: 100px;
  background-color: #121200;
  border: 1px solid white;
  color: #000;
  border-radius: 5px;
`