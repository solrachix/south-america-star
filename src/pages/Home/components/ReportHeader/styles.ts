import styled from 'styled-components/native'
import { rgba } from 'polished'
import { LinearGradient } from 'expo-linear-gradient'
import Animated from 'react-native-reanimated'

import { Video as video } from 'expo-av'

export const Container = styled(Animated.ScrollView)`
  flex: 1;
  width: 100%;
  height: auto;

  padding-bottom: 70px;
  /* background:  #f00; */
`

interface ImageProps {
  width?: string;
  height?: string;
}
export const Image = styled(Animated.Image)<ImageProps>`
  width: 100%;
  height: 300px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  z-index: 1;
`

export const Video = styled(video)`
  width: 100%;
  height: 300px;
`

export const ImageLinearGradient = styled(LinearGradient).attrs((/* props */) => ({
  colors: [rgba('#191B21', 0.1), rgba('#191B21', 0.6), '#191B21']
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  
  z-index: 5;
`

export const Header = styled.View`
  min-width: 100%;
  height: 60px;
  
  margin: 0%;
  padding: 6%;

  flex-direction: row;
  justify-content: space-between;
  align-items:  center;

  z-index: 10;
`

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 20px;

  border-radius: 10px;
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
