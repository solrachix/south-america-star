import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { ThemeContext } from 'styled-components'

import Text from '../../../../components/Text'
import { Container } from './styles'

import { HEADER_IMAGE_HEIGHT } from '../ReportHeader'

const {
  interpolate, Extrapolate
} = Animated

interface props {
  scrollY: Animated.Value<number>;
  content: string;
}

const Body: React.FC<props> = ({ content, scrollY }) => {
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
      paddingBottom: 0,
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
      <Text
        text={content}
        align="auto"
        color={theme.white}
        size={16} weight={500}
      />
    </Container>
  )
}
export default Body
