import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { rgba } from 'polished'
import Animated from 'react-native-reanimated'
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export const height = 50
export const width = WIDTH

export const Container = styled.View`
  position: absolute;
  /* max-width: 100%;
  width: 100%;
  height: 50px; */

  top: ${HEIGHT - height};

  /* background-color: #15121E; */

  /* flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end; 
  align-items: center; */
`

export const Tab = styled.TouchableOpacity`

`

export const Button = styled.TouchableOpacity`
  flex: 1;

  flex-shrink: 3;
  flex-grow: 4;
  flex-basis:  11px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

// export const ButtonEnabled = styled(Animated.View)`
//   /* flex: 1; */
//   /* min-width: 100px; */
//   /* width: auto; */
//   height: 70%;
//   padding: 6px;
//   /* flex-grow: 4; */

//   background: ${rgba('#ff7327', 0.2)};
//   border-radius: 20px;

//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
// `

interface DotProps {
  width: number;
  height: number;
}
export const Dot = styled<DotProps>(Animated.View)`
  position: absolute;
  min-width: 100px;
  height: 70%;

  /* width: ${props => props.width}px;
  height: ${props => props.height}px; */


  padding: 6px;

  background: ${rgba('#ff7327', 0.2)};
  border-radius: 20px;

  z-index: -1;
`
