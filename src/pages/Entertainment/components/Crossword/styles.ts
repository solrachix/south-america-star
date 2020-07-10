import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  
  background-color: #191B21;
`
// Table, Tbody, Tr

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
