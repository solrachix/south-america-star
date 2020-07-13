import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  
  background-color: #191B21;
`

export const Table = styled.View`
  min-width: 100%;
  margin-top: 40px;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Tr = styled.View`
  min-width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

interface TdProps {
  disabled: boolean;
}

export const Td = styled.TextInput.attrs((/** props */) => ({
  autoCompleteType: 'off',
  autoCorrect: false,
  clearButtonMode: 'always',
  enablesReturnKeyAutomatically: true,
  spellCheck: false,
  maxLength: 1
}))<TdProps>`
  position: relative;
  width: 8.8%;
  height: 30px;

  padding: 0;
  margin: 0;

  border: 0.2px solid #191B21;
  background-color: ${props => props.disabled ? '#191B21' : '#252131'};
  color: #F4F4F4;

  text-align: center;
  align-items: center;
`

export const ButtonContainer = styled.View`
  width: 100%;
  height: auto;
  margin-top: 20px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;  
`

interface ButtonProps {
  bg: string
}
export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 48%;
  height: 40px;

  background: ${props => props.bg};
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Icons = styled(Ionicons)`

`
