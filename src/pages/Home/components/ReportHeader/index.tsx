import React, { useContext } from 'react'
import Animated from 'react-native-reanimated'
import { ThemeContext } from 'styled-components'

import { AntDesign } from '@expo/vector-icons'
import Text from '../../../../components/Text'
import {
  Container,
  Image,
  Video,
  ImageLinearGradient,
  Header,
  HeaderContent,
  Avatar,
  Column
} from './styles'

export const MIN_HEADER_HEIGHT = 45
export const HEADER_IMAGE_HEIGHT = 300

interface ReportHeaderProps {
  scrollY: Animated.Value<number>;
  isVideo: boolean;
  source: string;
  authors: string[];
  avatar: string;
  date: string;
  title: string;
}

const { interpolate, Extrapolate } = Animated

const ReportHeader: React.FC<ReportHeaderProps> = ({
  isVideo,
  source,
  scrollY,
  avatar,
  date,
  authors
}) => {
  const theme = useContext(ThemeContext)

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
      {/*
      <ImageLinearGradient /> */}
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
              isPlayinge
              isLooping
              useNativeControls={true}
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

      <Header >
        <Avatar source={{ uri: avatar }} />
        <HeaderContent>
          <Column width={75} >
            <Text
              text={authors.map(word => word.split(' ')[0].toLowerCase().capitalize()).join(', ')}
              size={14}
              weight={700}
            />
            <Text text={date} size={14} weight={500} />
          </Column>
          <Column width={25} >
            <AntDesign name="sharealt" size={20} color={theme.orange} />
          </Column>
        </HeaderContent>
      </Header>

    </Container>
  )
}

export default ReportHeader
