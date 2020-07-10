import styled from 'styled-components/native'
import { rgba } from 'polished'
import { LinearGradient } from 'expo-linear-gradient'
import Text from '../../components/Text'

export const Container = styled.ScrollView`
  flex: 1;
  
  background-color: #191B21;
  padding: 20px;
`

export const CarouselContainer = styled.View`
  width: 100%;
  margin-top: 10%;
  margin-bottom: 10%;

  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 5%;
  padding: 5%;
`

export const Item = styled.TouchableOpacity`
  width: 250px;
  height: 250px;

  /* padding: 10px; */
  /* margin-left: 25px;
  margin-right: 25px; */
  background: #00f;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;

  /* filter: saturate(0%) grayscale(20%) brightness(50%); */

  resize-mode: cover;
  justify-content: center;
`

export const ItemLinearGradient = styled(LinearGradient).attrs((/* props */) => ({
  colors: ['transparent', 'transparent', rgba('#FF7C3F', 0.01), rgba('#FF7C3F', 0.1), rgba('#FF7C3F', 0.4), rgba('#FF7C3F', 0.9)]
}))`
  width: 100%;
  height: 100%;
  margin-left: 0%;
  margin-top: 0%;

  border-radius: 5px;
`

export const ItemAuthor = styled(Text)`
  position: absolute;
  margin-top: 76%;
  margin-left: 10%;
  width: 80%;
  height: 50px;

  color: #f5f5f5;
  font-size: 30px;
`

export const ReportItem = styled.TouchableOpacity`
  min-width: 100%;
  height: 60px;
  /* margin-top: 0%; */
  margin-bottom: 6%;
  padding: 0%;

  flex-direction: row;
  justify-content: space-between;
  align-items:  center;
`
export const ReportContent = styled.View`
  width: 80%;
  height: 100%;

  flex-direction: row;
  justify-content: flex-start;
  align-items:  center;
`
interface ColumnProps {
  width?: number
}
export const Column = styled.View<ColumnProps>`
  width: ${({ width = 50 }) => width}%;
  height: 100%;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 20px;

  border-radius: 10px;

  resize-mode: cover;
`

export const Video = styled(video)`
  width: 70px;
  height: 70px;
  margin-right: 20px;

  border-radius: 10px;
`

export const ReportText = styled(Text)`
  /* text-overflow: ellipsis; */

  /* Required for text-overflow to do anything */
  /* white-space: nowrap;
  overflow: hidden; */
  
  font-family: "Roboto_400Regular";
`
