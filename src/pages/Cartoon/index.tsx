import React from 'react'
import { Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Container, Image } from './styles'

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

const Cartoon: React.FC<props> = ({ navigation, route }) => {
  const { cartoon } = route.params
  const cropWidth = Dimensions.get('window').width
  const cropHeight = Dimensions.get('window').height

  navigation.setOptions({
    transparent: true,
    title: false
  })

  return (
    <>
      <StatusBar hidden={true} />
      <Container
        cropWidth={cropWidth}
        cropHeight={cropHeight}
        imageWidth={cropWidth}
        imageHeight={cropHeight - 50}>
        <Image source={cartoon.img} resizeMode="contain" />
      </Container>
    </>
  )
}

export default Cartoon
