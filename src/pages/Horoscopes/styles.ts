import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { darken } from 'polished'

export const Container = styled.View`
  width: 100%;
  flex: 1;
  
  background-color: #191B21;

  justify-content: center;
  align-items: center;
`

export const Card = styled.TouchableHighlight`
  width: ${Dimensions.get('window').width - 100}px;
  height: ${Dimensions.get('window').height - 160}px;

  /* padding: 20px; */
  background-color: ${darken(0.0, '#191B21')};
  border-radius: 28px;

  shadow-color: #000;
  shadow-offset: {width: 0px, height: 2px};
  shadow-opacity: 0.8;
  shadow-radius: 2px;

  elevation: 10px;

`
export const Image = styled.Image`
  width: 100%;
  height: 100%;
  /* margin-top: 10%; */

  /* background-color: ${darken(0.0, '#191B21')}; */

  border-radius: 14px;
`
