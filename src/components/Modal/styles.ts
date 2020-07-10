import styled, { css } from 'styled-components/native'

export const Header = styled.View`
  position: relative;
  z-index: 10;

  width: 100%;
  min-height: 50px;
  padding: 0;
  padding-left: 8%;
  padding-right: 8%;
  
  margin-top: 0%;
  top: 0%;
  left: 0px;
  right: 0px;

  flex-direction: row;
  /* flex-flow: row wrap; */
  justify-content: space-between;
  align-items: center;
  align-content: center;
  
  background-color: #15121E;
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
