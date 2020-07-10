import * as React from 'react'
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'

import { Container, Image, Video, ImageLinearGradient } from './styles'

export const MIN_HEADER_HEIGHT = 45
export const HEADER_IMAGE_HEIGHT = 480
interface CoverProps {
  scrollY: Animated.Value<number>;
  source: string;
}

const { interpolate, Extrapolate } = Animated

const Cover: React.FC<CoverProps> = ({ isVideo, source, scrollY }) => {
  const translateY = interpolate(scrollY, {
    inputRange: [
      0,
      HEADER_IMAGE_HEIGHT / 2,
      HEADER_IMAGE_HEIGHT
    ],
    outputRange: [
      0,
      0,
      -HEADER_IMAGE_HEIGHT / 2
    ],
    // extrapolateRight: Extrapolate.CLAMP,
    extrapolate: Extrapolate.CLAMP
  })
  const opacity = interpolate(scrollY, {
    inputRange: [
      HEADER_IMAGE_HEIGHT / 2,
      HEADER_IMAGE_HEIGHT
    ],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  })

  return (
    <Container
      style={{
        transform: [{
          translateY: translateY
        }]
      }}>

      {
        isVideo
          ? (
            <Video
              source={source}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              // useNativeControls={true}
            />
          )
          : (
            <>
              <ImageLinearGradient />
              <Image
                source={source}
                style={{ opacity }}
              />
            </>
          )
      }

    </Container>
  )
}

export default Cover
