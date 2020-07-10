import React, { useContext } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { ThemeContext } from 'styled-components'

import { Ionicons as Icon } from '@expo/vector-icons'

import Home from '../pages/Home'
import Horoscopes from '../pages/Horoscopes'
import Entertainment from '../pages/Entertainment'

// import TabBar from '../components/TabBar'
const Tab = createMaterialTopTabNavigator()

const Routes: React.FC = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <Tab.Navigator
      tabBarPosition="bottom"

      keyboardDismissMode="on-drag"
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: themeContext.orange,
        showIcon: true,
        showLabel: false,
        style: { backgroundColor: themeContext.background.dark },
        indicatorStyle: {
          position: 'absolute',
          backgroundColor: themeContext.orange,
          top: '0%'
        }
      }}
      // tabBar={props => <TabBar {...props} />}
    >

      <Tab.Screen name="Main" component={(props) => <Home {...props } />}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={25} />
          )
        }}/>

      <Tab.Screen name="horoscopes" component={Horoscopes}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="md-planet" color={color} size={25} />
          )
        }}/>

      <Tab.Screen name="entertainment" component={Entertainment}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="logo-game-controller-a" color={color} size={25} />
          )
        }}/>
    </Tab.Navigator>
  )
}

export default Routes
