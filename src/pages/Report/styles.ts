import styled from 'styled-components/native'
import { rgba } from 'polished'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

import Text from '../../components/Text'

export const Container = styled.View`
  flex: 1;
  
  background-color: #191B21;
`

interface ImageProps {
  width?: string;
  height?: string;
}
export const Image = styled.ImageBackground<ImageProps>`
  width: 100%;
  height: 38%;
  margin-top: -10px;
  /* margin-bottom: 10px; */

  resize-mode: cover;
`

export const ImageLinearGradient = styled(LinearGradient).attrs((/* props */) => ({
  colors: ['transparent', 'transparent', rgba('#191B21', 0.1), rgba('#191B21', 0.6), '#191B21']
}))`
  width: 100%;
  height: 100%;
  margin-left: 0%;
  margin-top: 0%;
`

export const Title = styled(Text)`
  margin-top: -28%;
  padding-left: 5%;
`

export const ArrowBack = styled(Ionicons).attrs(() => ({
  name: 'ios-arrow-back',
  size: 24
}))`
  elevation: 5;
`
