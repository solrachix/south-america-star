import React, { useState, useContext } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { ThemeContext } from 'styled-components'

import Carousel from 'react-native-snap-carousel'
import Text from '../../components/Text'
import { Container, CarouselContainer, ImageBackground, Item, ItemLinearGradient, ItemAuthor, ReportItem, ReportContent, Column, ReportText, Image, Video } from './styles'

import temporaryData from '../../temporaryData'

const Home: React.FC = ({ modalizeRef, navigation, ...props }) => {
  const themeContext = useContext(ThemeContext)
  const [cartoons, setCartoons] = useState(temporaryData.cartoons)
  const [reports, setReports] = useState(temporaryData.reports)

  return (
    <Container>

      <Text
        style={{ marginTop: 30 }}
        text="Reportagens"
        size={30}
        weight={700}
      />

      <CarouselContainer>
        <Carousel
          layout={'default'}
          layoutCardOffset={1}

          data={cartoons}
          sliderWidth={400}
          itemWidth={250}
          itemHeight={250}

          renderItem={({ item }) => (
            <Item
              onPress={() => navigation.push('cartoon', { cartoon: item })}
            >
              <ImageBackground source={item.img} >
                <ItemLinearGradient>
                  <ItemAuthor text={item.author} />
                </ItemLinearGradient>
              </ImageBackground>
            </Item>

          )}
          // onSnapToItem = { index => this.setState({activeIndex:index}) }
        />
      </CarouselContainer>

      <Text
        style={{ marginBottom: 15 }}
        text="Noticias"
        size={20}
        weight={700}
      />

      <FlatList
        contentContainerStyle={styles.contentContainer}
        horizontal={false}
        data={reports}
        renderItem={({ item: report }) => (
          <ReportItem
            key={report.id}
            // onPress={() => modalizeRef.current?.open() }
            onPress={() => navigation.push('report', { report }) }
          >
            {
              report.isVideo
                ? (
                  <Video
                    source={report.source}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    // useNativeControls={true}
                  />
                )
                : <Image resizeMode="center" source={!report.isVideo && report.source} />
            }
            <ReportContent>
              <Column width={80} >
                <Text
                  text={report.authors.map(word => word.split(' ')[0].toLowerCase().capitalize()).join(', ')}
                  size={10} color={themeContext.orange} weight={700} />
                <Text text={report.date} size={14} weight={500} />
              </Column>
              <Column width={20} >
                {/* <AntDesign name="sharealt" size={24} color={theme.orange} /> */}
              </Column>
              {/* <Text text={report.author} color={themeContext.orange} size={18} weight={400} />
              <ReportText numberOfLines={1} text={report.content} size={14} weight={200} /> */}
            </ReportContent>

          </ReportItem>
        )}

        keyExtractor={report => report.id}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 40
  }
})

export default Home
