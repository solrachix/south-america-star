import React, { useContext, useRef } from 'react'
import { Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ThemeContext } from 'styled-components'
import { Ionicons as Icon } from '@expo/vector-icons'

import crossword from '../../assets/images/crossword.png'

// import Modal from '../../components/Modal'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

import Text from '../../components/Text'
import Crossword from './components/Crossword'
import HuntingWords from './components/HuntingWords'
import { Container, Card, Column, Image, Button } from './styles'

const Entertainment: React.FC = () => {
  const modalizeCrosswordRef = useRef<Modalize>(null)
  const modalizeHuntingWordsRef = useRef<Modalize>(null)
  const theme = useContext(ThemeContext)

  const crosswordHanlde = (config: string) => {
    if (config === 'open') {
      return modalizeCrosswordRef.current?.open()
    } else {
      return modalizeCrosswordRef.current?.close()
    }
  }
  const huntingWordsHanlde = (config: string) => {
    if (config === 'open') {
      return modalizeHuntingWordsRef.current?.open()
    } else {
      return modalizeHuntingWordsRef.current?.close()
    }
  }
  return (
    <>
      <StatusBar hidden={true} />
      <Container>

        <Card onPress={() => crosswordHanlde('open') }>
          <Column height={60} >
            <Image source={crossword} resizeMode="cover" />
          </Column>
          <Column height={40}>
            <Text style={{ width: 'auto' }} text="Palavras cruzadas" size={13} />
            <Icon color={theme.orange} name='ios-arrow-forward' size={24} />
          </Column>
        </Card>

        <Card onPress={() => huntingWordsHanlde('open') }>
          <Column height={60} >
            <Image source={crossword} resizeMode="cover" />
          </Column>
          <Column height={40}>
            <Text style={{ width: 'auto' }} text="Caça palavras" size={13} />
            <Icon color={theme.orange} name='ios-arrow-forward' size={24} />
          </Column>
        </Card>

        <Portal>
          <Modalize
            ref={modalizeCrosswordRef}
            modalStyle={{ padding: 20, backgroundColor: theme.background.dark }}
            handleStyle={{ backgroundColor: theme.orange }}

            handlePosition="inside"
            modalHeight={Dimensions.get('window').height}
            withHandle={false}
            HeaderComponent={() => (
              <Button onPress={() => crosswordHanlde('close') } >
                <Icon color={theme.orange} name='ios-arrow-back' size={24} />
              </Button>
            )}
          >
            <Crossword />
          </Modalize>

          <Modalize
            ref={modalizeHuntingWordsRef}
            modalStyle={{ padding: 20, backgroundColor: theme.background.dark }}
            handleStyle={{ backgroundColor: theme.orange }}

            handlePosition="inside"
            modalHeight={Dimensions.get('window').height}
            withHandle={false}
            HeaderComponent={() => (
              <Button onPress={() => huntingWordsHanlde('close') } >
                <Icon color={theme.orange} name='ios-arrow-back' size={24} />
              </Button>
            )}
          >
            <HuntingWords />
          </Modalize>
        </Portal>

      </Container>
    </>
  )
}

export default Entertainment
