import React, { useRef, useEffect } from 'react'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

import { Header, View } from './styles'

interface Props {
  open?: boolean;
  headerLeft?: React.FC;
  title?: React.FC;
  headerRight?: React.FC;
  HeaderComponent?: React.FC;
}
const Modal: React.FC<Props> = ({
  open = false,
  HeaderComponent = null,
  children,
  headerLeft = () => <></>,
  title = () => <></>,
  headerRight = () => <></>,
  ...props
}) => {
  const modalizeRef = useRef<Modalize>(null)

  useEffect(() => {
    console.log(open)
    modalizeRef.current?.open()
  }, [])

  return (
    <Portal>
      <Modalize
        {...props}

        HeaderComponent={ () => HeaderComponent || (
          <Header>
            <View align="flex-start" >
              {headerLeft()}
            </View>
            <View>
              {title()}
            </View>
            <View align="flex-end">
              {headerRight()}
            </View>
          </Header>
        )}
      >
        {children}
      </Modalize>
    </Portal>

  )
}

export default Modal
