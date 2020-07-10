import styled from 'styled-components/native'
import { rgba } from 'polished'
import { LinearGradient } from 'expo-linear-gradient'
import Animated from 'react-native-reanimated'

import { Video as video } from 'expo-av'

export const Container = styled(Animated.ScrollView)`
  width: 100%;
  height: 600px;

  /* background:  #f00; */
`

interface ImageProps {
  width?: string;
  height?: string;
}
export const Image = styled(Animated.Image)<ImageProps>`
  width: 100%;
  height: 400px;

  margin-top: -10px;
  /* margin-bottom: 10px; */

  resize-mode: cover;
  z-index: 1;
`

export const Video = styled(video)`
  width: 100%;
  height: 400px;
`

export const ImageLinearGradient = styled(LinearGradient).attrs((/* props */) => ({
  colors: [rgba('#191B21', 0.1), rgba('#191B21', 0.6), '#191B21']
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  
  z-index: 5;
`
