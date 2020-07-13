import React, { useContext, useRef, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { ThemeContext } from 'styled-components'
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

import Text from '../../components/Text'
import { Container, Card, Image } from './styles'

import temporaryData from '../../temporaryData'

interface props {
  navigation: {
    push: () => void;
    setOptions: (prop: unknown) => void;
    goBack: () => void;
  };
  route: {
    key: string;
    name: string;
    params: {
      cartoon: {
        id: number;
        author: string;
        img: string;
      };
    }
  }
}

interface Horoscope {
  id: number;
  title: string;
  content: string;
  img: string;
}
const Horoscopos: React.FC<props> = ({ navigation }) => {
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null)
  const theme = useContext(ThemeContext)
  const modalizeRef = useRef<Modalize>(null)

  const _scrollInterpolator = (index, carouselProps) => {
    const range = [3, 2, 1, 0, -1]
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps)
    const outputRange = range

    return { inputRange, outputRange }
  }

  const _animatedStyles = (index, animatedValue, carouselProps) => {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX'

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [1, 0]
      }),
      transform: [{
        rotate: animatedValue.interpolate({
          inputRange: [-1, 0, 1, 2, 3],
          outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
          extrapolate: 'clamp'
        })
      }, {
        [translateProp]: animatedValue.interpolate({
          inputRange: [-1, 0, 1, 2, 3],
          outputRange: [
            -sizeRef * 0.5,
            0,
            -sizeRef, // centered
            -sizeRef * 2, // centered
            -sizeRef * 3 // centered
          ],
          extrapolate: 'clamp'
        })
      }]
    }
  }

  const onOpen = (horoscope: Horoscope) => {
    setHoroscope(horoscope)
    return modalizeRef.current?.open()
  }
  return (
    <>
      <Container>
        <Carousel
          scrollInterpolator={_scrollInterpolator}
          slideInterpolatedStyle={_animatedStyles}
          useScrollView={true}

          data={temporaryData.horoscopes}
          sliderWidth={Dimensions.get('window').width - 50}
          itemWidth={Dimensions.get('window').width - 50}
          itemHeight={Dimensions.get('window').height - 160}

          renderItem={({ item: horoscope }) => (
            <View style={{ marginTop: '20%', alignItems: 'center' }}>
              <Card onPress={() => onOpen(horoscope) /* navigation.push('horoscopeDetail', { horoscope: horoscope }) */ }>
                {/* <Text text={horoscope.title.capitalize()} size={34} weight={700} /> */}
                <Image resizeMode="contain" source={horoscope.img} />
              </Card>
            </View>
          )}
        />
      </Container>

      <Portal>
        <Modalize
          ref={modalizeRef}
          modalStyle={{ padding: 20, backgroundColor: theme.background.dark }}
          snapPoint={300}
          HeaderComponent={() => <Text text={horoscope?.title || ''} style={{ marginBottom: 20 }} color={theme.orange} size={24} weight={700} />}
        >
          <Text
            text={horoscope?.content || ''}
            // text={horoscope?.content.replace(/(\r\n|\n|\r)/gm, '')}
            color={theme.white}
            align="justify"
            size={16} weight={500}
          />
        </Modalize>
      </Portal>
    </>
  )
}

export default Horoscopos
