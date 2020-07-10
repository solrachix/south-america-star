import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { ThemeContext } from 'styled-components'
import { AntDesign } from '@expo/vector-icons'

import Text from '../../../../components/Text'
import { Container, Header, Avatar, HeaderContent, Column } from './styles'

import { HEADER_IMAGE_HEIGHT } from '../Cover'

export const scrollRangeForAnimation = 100
const {
  interpolate, Extrapolate
} = Animated

interface props {
  scrollY: Animated.Value<number>;
  report: {
    id: number;
    author: string;
    avatar: string;
    date: string
    img: string;
    title: string;
    content: string;
  }
}

const Body: React.FC<props> = ({ report, scrollY }) => {
  const theme = useContext(ThemeContext)

  const translateY = interpolate(scrollY, {
    inputRange: [0, HEADER_IMAGE_HEIGHT / 2, HEADER_IMAGE_HEIGHT],
    outputRange: [
      -20,
      -20,
      -HEADER_IMAGE_HEIGHT / 2
    ],
    extrapolate: Extrapolate.CLAMP
  })
  const styles = StyleSheet.create({
    contentContainer: {
      paddingBottom: 40,
      paddingVertical: 10
    }
  })

  return (
    <Container
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      style={{
        transform: [{
          translateY: translateY
        }]
      }}
      contentContainerStyle={styles.contentContainer}
      decelerationRate="normal"
      nestedScrollEnabled={true}
      scrollToOverflowEnabled={true}
      overScrollMode="always"
      // showsVerticalScrollIndicator={false}
      // scrollEventThrottle={1}
      // stickyHeaderIndices={[1]}
    >

      <Header >
        <Avatar source={{ uri: report.avatar }} />
        <HeaderContent>
          <Column width={80} >
            <Text text={report.author.capitalize()} weight={700} />
            <Text text={report.date} size={14} weight={500} />
          </Column>
          <Column width={20} >
            <AntDesign name="sharealt" size={24} color={theme.orange} />
          </Column>
        </HeaderContent>
      </Header>

      <Text
        text={report.content}
        align="auto"
        size={16}
        weight={500}
      />
    </Container>
  )
}
export default Body
