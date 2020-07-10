import React, { useContext } from 'react'
import Animated from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import { ThemeContext } from 'styled-components'

import Cover from './components/Cover'
import Body from './components/Body'
import { Container, Title, ArrowBack } from './styles'

interface props {
  navigation: {
    push: () => void;
    setOptions: (prop: unknown) => void;
  };
  route: {
    key: string;
    name: string;
    params: {
      report: {
        id: number;
        author: string;
        avatar: string;
        date: string
        img: string;
        title: string;
        content: string;
      };
    }
  }
}
const { Value } = Animated

const Report: React.FC<props> = ({ navigation, route }) => {
  const theme = useContext(ThemeContext)
  const { report } = route.params
  const scrollY = new Value(150)

  navigation.setOptions({
    transparent: true,
    title: false,
    headerLeft: () => <ArrowBack color={theme.white} />
  })

  return (
    <Container>
      <StatusBar hidden={true}/>
      <Cover {...{ scrollY, source: report.img }} />

      {/* <Title
        text={report.title.capitalize()}
        // numberOfLines={1}
        color={theme.white}
        size={26}
        weight={700}
      /> */}

      <Body {...{ scrollY, report }} />

    </Container>
  )
}

export default Report
