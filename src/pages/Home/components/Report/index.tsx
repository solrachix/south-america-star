import React, { useRef, useContext } from 'react'
import { Dimensions } from 'react-native'
import { ThemeContext } from 'styled-components'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

// import { Container } from './styles'

const Report: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null)
  const theme = useContext(ThemeContext)

  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        modalStyle={{ padding: 20, backgroundColor: theme.background.dark }}
        handleStyle={{ backgroundColor: theme.orange }}

        handlePosition="inside"
        modalHeight={Dimensions.get('window').height}
        withHandle={false}
      >

      </Modalize>
    </Portal>
  )
}

export default Report
