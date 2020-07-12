import { BlurView } from '@react-native-community/blur'
import styled from 'styled-components/native'
import text from '../../../../components/Text'

import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  
  background-color: #191B21;
`

export const Text = styled(text)`
  margin-bottom: 20px;
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
  borderRadius: boolean;
  actived: boolean;
}

export const Td = styled.TouchableOpacity<TdProps>`
  position: relative;
  width: 8.4%;
  height: 30px;

  padding: 0;
  margin: 0;

  border: 0.2px solid #191B21;
  background-color: ${props => props.actived ? '#191B21' : '#252131'};
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

export const Loading = styled(BlurView)`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0%;
  left: 0%;

  /* background: #ff0; */
  
  justify-content: center;
  align-items: center;
`
