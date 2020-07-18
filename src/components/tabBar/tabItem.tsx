import React, { useContext, memo, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { rgba } from 'polished'
import { TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native'

// import Animated, { interpolate, Extrapolate, Value } from 'react-native-reanimated'

interface Props {
  value: Animated.Value;
  tabWidth: number;
  isFocused: boolean;
  label: string;
  index: number;
  newRouteIndex: number;
  newRouteName: string;
  options: {
    tabBarIcon: ({ color, size }: { color: string, size?: number}) => React.FC;
    tabBarAccessibilityLabel?: string | undefined;
    tabBarTestID?: string | undefined;
  };
  emit: (options: {
    type: string;
    target?: string | undefined;
    canPreventDefault?: boolean | undefined;
  }) => { defaultPrevented: boolean };
  navigation: {
    navigate: (props: string) => void;
  }
}
const TabBar: React.FC<Props> = ({ isFocused, value, tabWidth, newRouteIndex, index, newRouteName, label, options, emit, navigation }) => {
  const TabAnimatedValue = new Animated.Value(isFocused ? 1 : 0)
  const cursor = tabWidth * newRouteIndex
  const theme = useContext(ThemeContext)
  const tabBarIcon = options.tabBarIcon({
    color: isFocused ? theme.orange : rgba(theme.orange, 0.6)
  })

  useEffect(() => {
    Animated.spring(value, {
      toValue: tabWidth * newRouteIndex,
      useNativeDriver: true
    }).start()
  }, [isFocused])

  const onPress = async () => {
    Animated.sequence([
      Animated.timing(TabAnimatedValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true
        }),
        Animated.spring(TabAnimatedValue, {
          toValue: 1,
          useNativeDriver: true
        })
      ])
    ]).start()

    const event = emit({
      type: 'tabPress',
      target: index.toString(),
      canPreventDefault: true
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(newRouteName)
    }
  }

  const onLongPress = () => {
    emit({
      type: 'tabLongPress',
      target: index.toString()
    })
  }

  const opacity = value.interpolate({
    inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp'
  })
  const translateY = TabAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [64, 0],
    extrapolate: 'clamp'
  })
  const opacity1 = TabAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })
  return (
    <React.Fragment>
      <TouchableWithoutFeedback {...{ onPress, onLongPress, opacity }}>
        <Animated.View style={[styles.tab, { top: -6 }]}>
          { tabBarIcon }
        </Animated.View>
      </TouchableWithoutFeedback>
      {/* {
        isFocused && ( */}
      {/* <Animated.View
        style={{
          position: 'absolute',
          top: -20,
          left: tabWidth * index,
          width: tabWidth,
          height: 64,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacity1,
          transform: [{ translateY }],
          backgroundColor: '#f00'
        }}
      >
        <View style={styles.activeIcon}>
          { tabBarIcon }
        </View>
      </Animated.View> */}
      {/* )
      } */}
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  activeIcon: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    height: 64,
    justifyContent: 'center'
  }
})

export default memo(TabBar)
