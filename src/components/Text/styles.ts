import styled, { css } from 'styled-components/native'

interface props {
  text: string;
  align?: string;
  size?: number;
  color?: string;
  weight?: string | number;
  style?: unknown
}

export const Text = styled.Text`${(props: props) => css`
  width: 100%;
  height: auto;
  text-align: ${props.align};

  /* font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif */
  font-size: ${props.size}px;
  font-weight: ${props.weight};
  font-family: "Roboto_300Light";
  letter-spacing: 1px;

  color: ${props.color};
`}`
