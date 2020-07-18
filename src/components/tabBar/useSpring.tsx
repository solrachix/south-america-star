import React, { useRef, useEffect } from 'react'
import Animated from 'react-native-reanimated'

export interface SpringAnimationConfig {
  stiffness: number;
  damping: number;
  mass: number;
  overshootClamping: boolean;
  restSpeedThreshold: number;
  restDisplacementThreshold: number;
}

export default function useSpring (value: { from : number; to: number }, config: SpringAnimationConfig): Animated.Value<0> {
  const animatedValue = useRef(new Animated.Value(value.from)).current
  useEffect(() => {
    const animation = Animated.spring(animatedValue, {
      toValue: value.to,
      useNativeDriver: true,
      ...config
    })
    animation.start()
    return () => animation.stop()
  }, [value.to])
  return animatedValue
}
