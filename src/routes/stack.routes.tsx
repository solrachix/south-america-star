import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import { Host } from 'react-native-portalize'

import Header from '../components/HeaderStackNavigation'

import BottomTabs from './bottonTabs.routes'
import Report from '../pages/Report'
import Cartoon from '../pages/Cartoon'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer >
      <Host>
        <Stack.Navigator
          // headerMode="none"
          headerMode="screen"

          screenOptions={{
            header: (props) => <Header {...props} />,

            headerStyle: {
              // backgroundColor: themeContext.secundary,
              height: 60
            },
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS
          }}
          mode="modal"
        >
          <Stack.Screen name="Home" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen name="report" component={Report} />
          <Stack.Screen name="cartoon" component={Cartoon}
            options={{
              gestureEnabled: true,
              cardOverlayEnabled: true,
              ...TransitionPresets.ScaleFromCenterAndroid
            }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  )
}

export default Routes
