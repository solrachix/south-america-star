import styled, { css } from 'styled-components/native'
import Text from '../Text'

interface props {
  transparent: boolean
}

export const Container = styled.View<props>`
  position: ${props => props.transparent ? 'absolute' : 'relative'};
  z-index: 10;

  width: 100%;
  min-height: 50px;
  padding: 0;
  padding-left: 8%;
  padding-right: 8%;
  
  margin-top: 4%;
  top: 4%;
  left: 0px;
  right: 0px;

  flex-direction: row;
  /* flex-flow: row wrap; */
  justify-content: space-between;
  align-items: center;
  align-content: center;
  
  background-color: ${props => props.transparent ? 'transparent' : '#15121E'};

  elevation: ${props => props.transparent ? 0 : 5};
`

interface ViewProp {
  align?: string
}
export const View = styled.View<ViewProp>`${({ align }) => css`
  flex-grow: 3;
  flex-shrink: 3;

  justify-content: ${align || 'center'};
  align-items: ${align || 'center'};

  z-index: 15;
`}`

export const Title = styled(Text)`
 width: auto;
`
