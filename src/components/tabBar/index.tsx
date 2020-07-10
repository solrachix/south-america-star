import React from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'

import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { Container } from './styles'

const TabBar: React.FC = ({ state, descriptors, navigation, position }: MaterialTopTabBarProps) => {
  const routesLength = state.routes.length
  const windowWidth = Dimensions.get('window').width

  return (
    <Container>

    </Container>
  )
}

export default TabBar
