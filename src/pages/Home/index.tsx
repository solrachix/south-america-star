import React, { useState, useContext, useRef } from 'react'
import Animated from 'react-native-reanimated'
import { FlatList, StyleSheet, Dimensions } from 'react-native'
import { ThemeContext } from 'styled-components'

import thumb from '../../assets/images/thumb.jpg'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

import Carousel from 'react-native-snap-carousel'
import Text from '../../components/Text'
import ReportHeader from './components/ReportHeader'
import ReportBody from './components/ReportBody'
import { Container, CarouselContainer, ImageBackground, Item, ItemLinearGradient, ItemAuthor, ReportItem, ReportContent, Column, ReportText, Image, Video } from './styles'

import temporaryData from '../../temporaryData'

interface Report {
    id: number;
    authors: string[];
    avatar: string;
    date: string;
    isVideo: boolean;
    source: string;
    title: string;
    content: string;
}

const Home: React.FC = ({ navigation }) => {
  const scrollY = new Animated.Value(150)
  const theme = useContext(ThemeContext)
  const modalizeRef = useRef<Modalize>(null)
  const [cartoons, setCartoons] = useState(temporaryData.cartoons)
  const [reports, setReports] = useState(temporaryData.reports)
  const [report, setReport] = useState<Report | null>(null)

  const handleReport = (report: Report) => {
    setReport(report)
    return modalizeRef.current?.open()
  }
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
            onPress={() => handleReport(report) }
          >
            {
              report.isVideo
                ? <Image resizeMode="center" source={thumb} />
                : <Image resizeMode="center" source={!report.isVideo && report.source} />
            }
            <ReportContent>
              <Column width={80} >
                <Text
                  text={report.authors.map(word => word.split(' ')[0].toLowerCase().capitalize()).join(', ')}
                  size={10} color={theme.orange} weight={700} />
                <Text text={report.date} size={14} weight={500} />
              </Column>
            </ReportContent>

          </ReportItem>
        )}

        // keyExtractor={report => report.id}
      />

      <Portal>
        <Modalize
          ref={modalizeRef}

          modalStyle={{ backgroundColor: theme.background.dark }}
          modalHeight={Dimensions.get('window').height}

          handleStyle={{ backgroundColor: theme.orange }}
          handlePosition="inside"

          openAnimationConfig={{
            timing: { duration: 200 },
            spring: {
              speed: 0,
              bounciness: 0
            }
          }}

          // HeaderComponent={() => report && (
          //   <ReportHeader
          //     { ...report }
          //     scrollY={scrollY}
          //   />
          // )}
        >
          { report && <>
            <ReportHeader
              { ...report }
              scrollY={scrollY}
            />
            <ReportBody content={report.content} scrollY={scrollY} />
          </> }
        </Modalize>
      </Portal>
    </Container>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 40
  }
})

export default Home
