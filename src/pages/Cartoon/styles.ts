import styled from 'styled-components/native'
import ImageZoom from 'react-native-image-pan-zoom'
import { Dimensions } from 'react-native'

export const Container = styled(ImageZoom)`
  flex: 1;
  overflow: hidden;
  background-color: #191B21;

  justify-content: center;
  align-items: center;
`

interface ImageProps {
  width?: string;
  height?: string;
}
export const Image = styled.ImageBackground<ImageProps>`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').width - 50}px;
`
