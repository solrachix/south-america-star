import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 20px;
  background-color: #f00;
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;

  justify-content: space-evenly; 
  justify-items: stretch;
  align-items: center;
`
