import styled from 'styled-components/native'

import Animated from 'react-native-reanimated'

export const Container = styled(Animated.ScrollView)`
  width: 100%;
  height: 100%;
  
  padding: 6%;

  /* background: #ff0; */
  background:  #191B21;

  border-top-left-radius: 30px;
  
  /* justify-content: flex-start;
  align-items: center; */
`

export const Header = styled.View`
  min-width: 100%;
  height: 60px;
  /* margin-top: 0%; */
  margin-bottom: 6%;
  padding: 0%;

  flex-direction: row;
  justify-content: space-between;
  align-items:  center;
`

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 20px;

  border-radius: 10px;

  resize-mode: cover;
`

export const HeaderContent = styled.View`
  width: 80%;
  height: 100%;
  
  flex-direction: row;
  justify-content: flex-start;
  align-items:  center;
`

interface ColumnProps {
  width?: number
}
export const Column = styled.View<ColumnProps>`
  width: ${({ width = 50 }) => width}%;
  height: 100%;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
