import React, { useContext } from 'react'
import {
  SafeAreaView, StyleSheet, View, Animated
} from 'react-native'

import * as shape from 'd3-shape'
import { Svg, Path } from 'react-native-svg'

import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import TabItem from './tabItem'

import { ThemeContext } from 'styled-components'
import { height, width, Container } from './styles'

const AnimatedSvg = Animated.createAnimatedComponent(Svg)
const value = new Animated.Value(0)

const getPath = (tabWidth: number): string => {
  const left = shape.line().x(d => d.x).y(d => d.y)([
    { x: 0, y: 0 },
    { x: width, y: 0 }
  ])
  const tab = shape.line().x(d => d.x).y(d => d.y).curve(shape.curveBasis)([
    { x: width, y: 0 },
    { x: width + 5, y: 0 },
    { x: width + 10, y: 10 },
    { x: width + 15, y: height - 5 },
    { x: width + tabWidth - 15, y: height - 5 },
    { x: width + tabWidth - 10, y: 10 },
    { x: width + tabWidth - 5, y: 0 },
    { x: width + tabWidth, y: 0 }
  ])
  const right = shape.line().x(d => d.x).y(d => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 }
  ])
  return `${left} ${tab} ${right}`
}

export const TabBar: React.FC<MaterialTopTabBarProps> = ({ state, descriptors, navigation }) => {
  const tabWidth = width / state.routes.length
  const theme = useContext(ThemeContext)
  const backgroundColor = theme.background.darker
  const d = getPath(tabWidth)

  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0]
  })
  return (
    <>
      <Container {...{ height, width }}>
        <AnimatedSvg width={width * 2} {...{ height }} style={{ transform: [{ translateX }] }}>
          <Path fill={backgroundColor} {...{ d }} />
        </AnimatedSvg>
        <View style={[StyleSheet.absoluteFill, { flexDirection: 'row' }]}>
          {/* <StaticTabbar tabs={state.routes} {...{ value, navigation }} /> */}
          {
            state.routes.map((route, index) => {
              const { options } = descriptors[route.key]
              const label = options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name

              // console.log(index)
              return (
                <TabItem key={index}
                  {...{ tabWidth, index, navigation, label, ...descriptors[route.key] }}
                  emit={navigation.emit}
                  value={value}
                  newRouteName={route.name}
                  newRouteIndex={state.index}
                  isFocused={state.index === index}
                />
              )
            })
          }
        </View>
      </Container>
      <SafeAreaView style={{ backgroundColor }} />
    </>
  )
}

// import React from 'react'

// import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
// import TabItem from './tabItem'
// import { Container } from './styles'

// export const TabBar: React.FC<MaterialTopTabBarProps> = ({ state, descriptors, navigation }) => {
//   return (
//     <Container>
//       {
//         state.routes.map((route, index) => {
//           const { options } = descriptors[route.key]
//           const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//               ? options.title
//               : route.name

//           // console.log(options.tabBarTestID)
//           return (
//             <TabItem key={index}
//               {...{ onLayout, navigation, label, ...descriptors[route.key] }}
//               routeKey={route.key}
//               emit={navigation.emit}
//               newRouteName={route.name}
//               isFocused={state.index === index}
//             />
//           )
//         })
//       }
//     </Container>
//   )
// }
