import React, { useEffect } from 'react'
import {
  View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

interface Tab {
  name: string;
}

interface StaticTabbarProps {
  tabs: Tab[];
  value: Animated.Value;
  navigation: {
    navigate: (props: string) => void;
  }
}

const StaticTabbar: React.FC<StaticTabbarProps> = ({ value, tabs, navigation }) => {
  const values: Animated.Value[] = tabs
    .map((tab, index) => new Animated.Value(index === 0 ? 1 : 0))

  const onPress = (index: number) => {
    const tabWidth = width / tabs.length
    Animated.sequence([
      Animated.parallel(
        values.map(v => Animated.timing(v, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        }))
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true
        }),
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true
        })
      ])
    ]).start()

    // navigation.navigate('horoscopes')
  }

  return (
    <View style={styles.container}>
      {
        tabs.map((tab, key) => {
          console.log(tab)
          const tabWidth = width / tabs.length
          const cursor = tabWidth * key
          const opacity = value.interpolate({
            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
          })
          const translateY = values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [64, 0],
            extrapolate: 'clamp'
          })
          const opacity1 = values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp'
          })
          return (
            <React.Fragment key={key} >
              <TouchableWithoutFeedback onPress={() => onPress(key)}>
                <Animated.View style={[styles.tab, { top: -6, opacity }]}>
                  <Icon name="home" color="#f00" size={25} />
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={{
                  position: 'absolute',
                  top: -20,
                  left: tabWidth * key,
                  width: tabWidth,
                  height: 64,
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: opacity1,
                  transform: [{ translateY }]
                }}
              >
                <View style={styles.activeIcon}>
                  <Icon name="home" color="#f00" size={25} />
                </View>
              </Animated.View>
            </React.Fragment>
          )
        })
      }
    </View>
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
  container: {
    flexDirection: 'column'
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    height: 64,
    justifyContent: 'center'
  }
})

export default StaticTabbar
