import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  padding-top: 30px;
  
  background-color: #191B21;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Card = styled.TouchableOpacity`
  width: 150px;
  height: 140px;


  background-color: #252131;
  border-radius: 10px;

  elevation: 5;
`
interface ColumnProps {
  height?: number
}

export const Column = styled.View<ColumnProps>`
  width: 100%;
  height: ${({ height = 50 }) => height}%;
  
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const Image = styled.Image`
  width: 100%;
  height: 100%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
`

export const Button = styled.TouchableOpacity`
  z-index: 10
`
